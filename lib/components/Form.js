import React from 'react'
import styled from 'styled-components'
import { string, number, object } from 'prop-types'

import languages from '../data/languages'
import currencies from '../data/currencies'

import Button from './Button'
import { locale } from '../util/validators'

const Form = styled.form.attrs({
  method: 'post',
  acceptCharset: 'utf-8'
})`
  display: inline-block;
  margin: 10px;
`

const Input = styled.input.attrs({ type: 'hidden' })``

const MobilePay = ({
  accepturl,
  action,
  amount,
  callbackurl,
  className,
  currency,
  lang,
  merchant,
  orderid,
  paytype,
  style,
  ...props
}) => {
  return (
    <Form
      className={ className }
      style={ style }
      action={ action }>
      <Input
        name="merchant"
        value={ merchant } />
      <Input
        name="callbackurl"
        value={ callbackurl } />
      <Input
        name="accepturl"
        value={ accepturl } />
      <Input
        name="amount"
        value={ amount } />
      <Input
        name="currency"
        value={ currency } />
      <Input
        name="lang"
        value={ lang } />
      <Input
        name="orderid"
        value={ orderid } />
      <Input
        name="paytype"
        value={ paytype } />
      <Button {...props} value="MobilePay" />
    </Form>
  )
}

MobilePay.defaultProps = {
  action: 'https://payment.architrade.com/paymentweb/start.action',
  currency: 208, // https://en.wikipedia.org/wiki/ISO_4217 (DKK, NOK, EUR, SEK)
  lang: 'da', // http://tech.dibspayment.com/D2/Hosted/Input_parameters/Standard
  paytype: 'MPO_Nets' // http://tech.dibspayment.com/D2/Toolbox/Paytypes
}

MobilePay.propTypes = {
  accepturl: string.isRequired,
  action: string,
  amount: number.isRequired,
  callbackurl: string.isRequired,
  cancelurl: string.isRequired,
  className: string,
  currency: locale(currencies),
  lang: locale(languages),
  merchant: number.isRequired,
  orderid: number.isRequired,
  paytype: string,
  style: object
}

export default MobilePay
