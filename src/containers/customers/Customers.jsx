import { Space, Table, Tag } from "antd";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";

const Customers = () => {
  const loggedinUser = useSelector((state) => state.auth);
  async function AddUse() {
    const newData = [
      ...dataTable,
      await {
        key: Math.floor(Math.random() * 10000) + 1,
        name: name,
        age: age,
        address: address,
        tags: ["cool", "teacher"],
      },
    ];
    handleClose();
    console.log(newData);
    return newData;
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  return (
    <>
      <Button
        style={{ marginBottom: 10 }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add Customers
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Customers</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete all information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="Name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type=""
            fullWidth
            variant="standard"
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type=""
            fullWidth
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={AddUse}>Add Customers</Button>
        </DialogActions>
      </Dialog>
      <Table columns={columns} dataSource={dataTable} />
      <div> {console.log(loggedinUser.username)}</div>
    </>
  );
};

export default Customers;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const dataTable = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
