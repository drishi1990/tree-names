import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    field: {
      marginBottom: 16px,
      position: 'relative',
      display: 'flex',
    },
    textField: {
      '& label': {
        background-color: white,
        color: palette.grey[100],
        display: 'block',
        font-weight: 400,
        font-size: '1.125rem',
        position: 'absolute',
        bottom: 14,
        left: 10,
        padding-left: 6px,
        padding-right: 6px,
        transition:
          'transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1)',
        transitionProperty: 'color, bottom, transform',
        transformOrigin: 'bottom left',
      },
      '& input': {
        width: '100%',
        padding: 16px,
        display: 'flex',
        font-size: '1.125rem',
        color: black,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        background-color: white,
        appearance: 'none',
        '&:focus': {
          outline: `#8c96a9 auto 1px`,
          '&+label': {
            color: palette.primary.main,
            transform: 'scale(.85) translateY(-33px)',
          },
        },
      },
      '&.valid': {
        '& input+label': {
          transform: 'scale(.85) translateY(-33px)',
        },
      },
    },
    '@keyframes splash': {
      '40%': {
        background: '#FF5C85',
        boxShadow:
          '0 -18px 0 -8px #FF5C85, 16px -8px 0 -8px #FF5C85, 16px 8px 0 -8px #FF5C85, 0 18px 0 -8px #FF5C85, -16px 8px 0 -8px #FF5C85, -16px -8px 0 -8px #FF5C85',
      },
      '100%': {
        background: '#FF5C85',
        boxShadow:
          '0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent',
      },
    },
    checkbox: {
      '& input': {
        appearance: 'none',
        cursor: 'pointer',
        margin: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        border: '2px solid #bfbfc0',
        borderRadius: '50%',
        '&:focus': {
          outline: 0,
        },
        '&:checked + span': {
          animation: '$splash 0.6s ease forwards',
        },
        '&:checked + span + label + svg path': {
          strokeDashoffset: 0,
        },
      },
      '& label': {
        padding-left: 35,
      },
      '& span': {
        width: 24,
        height: 24,
        background: 'none',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: 'url("#goo")',
        transform: 'translate3d(0, 0, 0)',
        pointerEvents: 'none',
      },
      '& svg': {
        position: 'absolute',
        top: 5,
        left: 4,
        z-index: 1,
        pointerEvents: 'none',
        '& path': {
          stroke: '#fff',
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 19,
          strokeDashoffset: 19,
          transition: 'stroke-dashoffset 0.3s ease',
          transitionDelay: '0.2s',
        },
      },
    },
    fieldset: {
      padding: 0,
      margin: 0,
      border: 0,
      marginBottom: 16px,
    },
    error: {
      '& input': {
        outline: `red auto 1px`,
      },
      '& input:focus': {
        outline: `red auto 1px`,
        '&+label': {
          color: 'red',
        },
      },
    },
  })
);
