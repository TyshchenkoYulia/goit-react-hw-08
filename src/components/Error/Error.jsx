import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
import PageTitle from "../PageTitle/PageTitle";
import css from "./Error.module.css";

export default function Error() {
  return (
    <div className={css.container}>
      <PageTitle>
        <SignalWifiStatusbarConnectedNoInternet4Icon color="red" />
        Whoops, something went wrong!
      </PageTitle>
      <p className={css.error}> Please, try to reload this page!</p>
    </div>
  );
}
