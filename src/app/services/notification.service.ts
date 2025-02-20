import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  // ✅ Static method for success notification
  public static notifySuccess(message: string = 'Success!') {
    Notiflix.Notify.success(message);
  }

  // ✅ Static method for failure notification
  public static notifyFailure(message: string = 'Something went wrong!') {
    Notiflix.Notify.failure(message);
  }

  // ✅ Static method for modal confirmation
  public static notifyModal(
    title: string,
    message: string,
    firstMessage: string,
    secondMessage: string,
    functionOne: () => void,
    functionTwo: () => void
  ) {
    Notiflix.Confirm.show(
      title,
      message,
      firstMessage,
      secondMessage,
      functionOne,
      functionTwo
    );
  }

  // ✅ Instance methods (optional)
  showSuccess(message: string = 'Success!') {
    Notiflix.Notify.success(message);
  }

  showError(message: string = 'Something went wrong!') {
    Notiflix.Notify.failure(message);
  }

  showWarning(message: string = 'Warning!') {
    Notiflix.Notify.warning(message);
  }

  showInfo(message: string = 'Information!') {
    Notiflix.Notify.info(message);
  }

  showConfirm(
    title: string = 'Confirm Action',
    message: string = 'Are you sure?',
    firstButton: string = 'Yes',
    secondButton: string = 'No',
    onConfirm: () => void = () => Notiflix.Notify.success('Confirmed!'),
    onCancel: () => void = () => Notiflix.Notify.failure('Cancelled!')
  ) {
    Notiflix.Confirm.show(title, message, firstButton, secondButton, onConfirm, onCancel);
  }
}
