import ReactGA4 from "react-ga4";

export const AnaliticEvent = (category: string, action: string) => {
  ReactGA4.event({
    category,
    action,
  });
};