import { Redirect } from "raviger";
import Dashboard from "../components/website/dashboard/dashboard";
import ScanHistory from "../components/website/scans/scanHistory";
import ScanDetails from "../components/website/scans/scanDetails";
import NotFound404 from "../components/website/errors/not_found";
import ComingSoon from "../components/website/errors/coming_soon";
import NewScan from "../components/website/scans/newScan";
import About from "../components/website/about";
import Account from "../components/website/account/account";
import CredentialsList from "../components/website/credentials/credentialsList";

const routes = {
  "/": () => <Redirect to="/web/dashboard"></Redirect>,
  "/web/about": () => <About />,
  "/web/account": () => <Account />,
  "/web/dashboard": () => <Dashboard></Dashboard>,
  "/web/scans": () => <ScanHistory></ScanHistory>,
  "/web/scans/new": () => <NewScan />,
  "/web/scans/:scanId": ({ scanId }: any) => (
    <ScanDetails scanId={scanId}></ScanDetails>
  ),
  "/web/devices": () => <ComingSoon />,
  "/web/threats": () => <ComingSoon />,
  "/web/insights": () => <ComingSoon />,
  "/web/credentials": () => <CredentialsList />,
  "/web/controllers": () => <ComingSoon />,
  "/web/network": () => <ComingSoon />,
  "*": () => <NotFound404 />,
};

export default routes;
