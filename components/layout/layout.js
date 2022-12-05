import {Fragment, useContext} from "react";
import MainNavigation from './main-navigation';
import Contact from '../contact/contact';
import Notification from "../ui/notification/notification";
import NotificationContext from "../../store/notification-context";

const Layout = (props) => {

    const notificationContext = useContext(NotificationContext);
    const activeNotification = notificationContext.notification;

    const links = [
        {
            name: "Start",
            href: "/"
        }, {
            name: "O nas",
            href: "/#onas"
        }, {
            name: "Usługi",
            href: "/uslugi"
        }, {
            name: "Realizacje",
            href: "/realizacje"
        },
    ]

    return (
        <Fragment>
            <MainNavigation links={links}/>
            <main>{props.children}</main>
            <Contact/>
            <Notification
                title={activeNotification && activeNotification.title}
                message={activeNotification && activeNotification.message}
                status={activeNotification && activeNotification.status}
            />
        </Fragment>
    )
}

export default Layout;