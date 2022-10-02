import { Redirect } from "raviger";
import  Dashboard from "../components/website/dashboard/dashboard";
import ScanCard from "../components/website/scans/scancard";
import ScanHistory from "../components/website/scans/scanHistory";
import ScanDetails from "../components/website/scans/scanDetails";
import NotFound404 from "../components/website/errors/not_found";
import ComingSoon from "../components/website/errors/coming_soon";
import NewScan from "../components/website/scans/newScan";

const routes = {
    "/": () => <Redirect to="/web/dashboard"></Redirect>,
    "/web/dashboard": () => <Dashboard></Dashboard>,
    "/web/scans": () => <ScanHistory></ScanHistory>,
    "/web/scans/new": () => <NewScan />,
    "/web/scans/:scanId": ({scanId}: any) => <ScanDetails scanId={scanId}></ScanDetails>,
    "/web/devices": () => <ComingSoon />,
    "/web/threats": () => <ComingSoon />,
    "/web/insights": () => <ComingSoon />,
    "/web/credentials": () => <ComingSoon />,
    "/web/controllers": () => <ComingSoon />,
    "/web/network": () => <ComingSoon />,
    "*": () => <NotFound404 />,
}

export default routes;