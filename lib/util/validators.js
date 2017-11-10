import { oneLine } from 'common-tags'

export const stroke = (props, propName, componentName) => {
  if (!props.stroke) return
  if (
    props.stroke &&
    typeof (props.stroke) === 'boolean' &&
    props.color !== 'white') {
    return new Error(
      oneLine`
        Invalid prop \`stroke\` of value \`${props.stroke}\` \
        supplied to \`${componentName}\`, \
        expected \`stroke\` to be \`false\` when \`color\` isn't set \
        to \`white\`.
      `
    )
  }
}

export const locale = list => (props, propName, componentName) => {
  const valid = list.some(({ code }) => code === props[propName])
  if (!valid) {
    return new Error(
      oneLine`
        Invalid prop \`${propName}\` of value \`${props[propName]}\` \
        supplied to \`${componentName}\`, \
        expected one of \
        ${JSON.stringify(list.map(({ code }) => code).sort())}.
      `
    )
  }
}

export default {
  stroke,
  locale
}
