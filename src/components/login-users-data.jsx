import { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../data-access/api/get-all-users";

const LogInUsersRecords = () => {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);
    const allUsers = userStore.users || [];

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    if (allUsers.length === 0) {
        return (
            <div className="mt-5">
                <h1 className="text-center text-white mt-5">No User is found !</h1>
            </div>
        )
    }

    return (
        <>
            <Row className="justify-content-center mt-5">
                <Col className="mt-5" lg={10} md={10} sm={10} xs={10}>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Username</th>
                                <th>Email Address</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password.slice(0, 10) + (item.password.length > 10 ? '...' : '')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default LogInUsersRecords;
