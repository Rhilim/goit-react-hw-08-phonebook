import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Wrapper } from 'components/Wrapper';
import { StyledTitle } from 'components/PhoneBook/PhoneBook.styled';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/operations';
import { selectLoading } from 'redux/contactSlice';
import { Filter } from 'components/Filter/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
      <Wrapper>
        <StyledTitle>Phonebook</StyledTitle>
        <PhoneBook />
        <div>{isLoading && 'Request in progress...'}</div>
        <Filter />
        <Contacts />
      </Wrapper>
    </>
  );
}
