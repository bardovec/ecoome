import React from 'react';

import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmModal = ({ className, text, onClick }) => {
  const submit = () => {
    confirmAlert({
      title: 'Удаление',
      message: 'Вы реально хотите удалить?',
      buttons: [
        {
          label: 'Да',
          onClick,
        },
        {
          label: 'Нет',
          onClick: '',
        },
      ],
    });
  };

  return (
    <div className={className}>
      <button className={className} onClick={submit}>{text}</button>
    </div>
  );
};

export default ConfirmModal;
