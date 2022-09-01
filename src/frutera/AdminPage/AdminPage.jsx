import './AdminPage.scss'
import BodyStyle from '../components/AdminComponents/BodyStyle/BodyStyle'
import DashBoard from '../components/AdminComponents/DashBoard/DashBoard'
import ManageFoodItem from '../components/AdminComponents/ManageFoodItem/ManageFoodItem'
import RegisteredUser from '../components/AdminComponents/RegisteredUser/RegisteredUser'
import Orders from '../components/AdminComponents/Orders/Orders'
import Voucher from '../components/AdminComponents/Voucher/Voucher'
import {useState} from "react";
import Blogs from "../components/AdminComponents/Blogs/Blogs";

export default function AdminPage() {
    const [page, setPage] = useState("Dashboard")

    const renderDash = () => {
        switch (page) {
            case("Dashboard"):
                return (
                    <>
                        <ManageFoodItem/>
                        <RegisteredUser/>
                        <Orders/>
                        <Voucher/>
                        <Blogs/>
                    </>
                )
            case("Products"):
                return (
                    <ManageFoodItem/>
                )
            case("Users"):
                return (
                    <RegisteredUser/>
                )
            case("Orders"):
                return (
                    <Orders/>
                )
            case("Vouchers"):
                return (
                    <Voucher/>
                )
            case("Blogs"):
                return (
                    <Blogs/>
                )
            default:
                return (
                    <>
                        <ManageFoodItem/>
                        <RegisteredUser/>
                        <Orders/>
                        <Voucher/>
                        <Blogs/>
                    </>
                )
        }

    }
    return (
        <>
            <div className='AdminPage'>
                <BodyStyle setPage={setPage}/>
                <div className='allCategories'>
                    <DashBoard path={page} setPage={setPage}/>
                    {renderDash()}
                </div>
            </div>
        </>
    )
}