import logging

from django.db import IntegrityError
from django.utils import timezone

from huscy.subjects.models import Address, Contact, Inactivity, Subject

logger = logging.getLogger('huscy.subjects')


def create_address(country, city, zip_code, street):
    return Address.objects.create(country=country, city=city, zip_code=zip_code, street=street)


def update_address(contact, country, city, zip_code, street):
    contact.address.country = country
    contact.address.city = city
    contact.address.zip_code = zip_code
    contact.address.street = street
    contact.address.save()
    return contact.address


def create_contact(first_name, last_name, display_name, gender, date_of_birth, address, email=''):
    contact = Contact.objects.create(
        address=address,
        date_of_birth=date_of_birth,
        display_name=display_name,
        email=email,
        first_name=first_name,
        gender=gender,
        last_name=last_name,
    )
    return contact


def update_contact(contact, first_name, last_name, display_name, gender, date_of_birth, email=''):
    contact.date_of_birth = date_of_birth
    contact.display_name = display_name
    contact.email = email
    contact.first_name = first_name
    contact.gender = gender
    contact.last_name = last_name
    contact.save()
    return contact


def create_subject(contact, guardians):
    try:
        subject = Subject.objects.create(
            contact=contact,
        )
    except IntegrityError:
        # try again if generated uuid is already taken
        return create_subject(contact, guardians)

    logger.info('Subject id:%d has been created', subject.id)

    for guardian in guardians:
        subject.guardians.add(guardian)

    return subject


def set_inactivity(subject, until=None):
    if until and until < timezone.now().date():
        raise ValueError(f'Until ({until}) cannot be in the past.')

    inactivity, created = Inactivity.objects.get_or_create(subject=subject,
                                                           defaults={'until': until})
    if not created:
        inactivity.until = until
        inactivity.save()

    return inactivity


def unset_inactivity(subject):
    subject.inactivity_set.all().delete()


def remove_guardian(subject, guardian):
    subject = guardian.subjects.get(pk=subject.id)
    subject.guardians.remove(guardian)
    if not guardian.subjects.exists():
        guardian.delete()
