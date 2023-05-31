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

const User = () => {
  const [dataTable1, setDataTable] = useState(dataTable);
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
    return setDataTable(newData);
  }

  async function DeleteUser() {
    const newData = [...dataTable.slice()];
    handleCloseD();
    alert("Deleted User")
    return setDataTable(newData);
  }

  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  return (
    <>
      <Button
        style={{ margin: 10 }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add User
      </Button>
      <Button
        style={{ margin: 10 }}
        variant="outlined"
        onClick={handleClickOpenD}
      >
        Delete User
      </Button>
      <Dialog open={openD} onClose={handleCloseD}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseD}>Cancel</Button>
          <Button onClick={DeleteUser}>Delete User</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
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
          <Button onClick={AddUse}>Add User</Button>
        </DialogActions>
      </Dialog>
      <Table columns={columns} dataSource={dataTable1} />
    </>
  );
};

export default User;

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
