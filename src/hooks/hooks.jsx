import { makeStyles } from "@material-ui/core";

export const usePadding = makeStyles((theme) => ({
  p: {
    paddingBottom: (padding) => `${padding}rem !important`,
    paddingTop: (padding) => `${padding}rem !important`,
    paddingLeft: (padding) => `${padding}rem !important`,
    paddingRight: (padding) => `${padding}rem !important`,
  },
  pl: {
    paddingLeft: (padding) => `${padding}rem`,
  },
  pr: {
    paddingRight: (padding) => `${padding}rem`,
  },
  pb: {
    paddingBottom: (padding) => `${padding}rem`,
  },
  pt: {
    paddingTop: (padding) => `${padding}rem`,
  },
  py: {
    paddingBottom: (padding) => `${padding}rem`,
    paddingTop: (padding) => `${padding}rem`,
  },
  px: {
    paddingLeft: (padding) => `${padding}rem`,
    paddingRight: (padding) => `${padding}rem`,
  },
}));
export const useMargin = makeStyles(() => ({
  m: {
    marginLeft: (margin) => `${margin}rem !important`,
    marginRight: (margin) => `${margin}rem !important`,
    marginBottom: (margin) => `${margin}rem !important`,
    marginTop: (margin) => `${margin}rem !important`,
  },
  ml: {
    marginLeft: (margin) => `${margin}rem`,
  },
  mr: {
    marginRight: (margin) => `${margin}rem`,
  },
  mx: {
    marginLeft: (margin) => `${margin}rem`,
    marginRight: (margin) => `${margin}rem`,
  },
  mb: {
    marginBottom: (margin) => `${margin}rem`,
  },
  mt: {
    marginTop: (margin) => `${margin}rem`,
  },
  my: {
    marginBottom: (margin) => `${margin}rem`,
    marginTop: (margin) => `${margin}rem`,
  },
}));
