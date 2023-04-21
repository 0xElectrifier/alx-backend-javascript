/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') throw new TypeError('amount must be a number');
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (val instanceof Currency) this._currency = val;
    else throw new TypeError('currency must be a Currency');
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} ${this.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    if (typeof conversionRate != 'number') {
      throw new TypeError('amount must be a number');
    }
    return amount * conversionRate;
  }
}
