import React, { useEffect, useState } from "react";
import "../App.css";
import "@ant-design/v5-patch-for-react-19";
import { Button, Input, Modal } from "antd";

const Crud = () => {
  let api = "http://localhost:3000/data";
  let [data, setData] = useState([]);

  let [actionId, setactionId] = useState(null);
  function showActions(id) {
    if (actionId == id) {
      setactionId(null);
    } else {
      setactionId(id);
    }
  }

  async function get() {
    try {
      let res = await fetch(api);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);

  async function delUser(id) {
    try {
      await fetch(`${api}/${id}`, { method: "DELETE" });
      get();
    } catch (error) {
      console.error(error);
    }
  }

  const [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");
  let [addSena, setaddSena] = useState("");
  let [addImg, setaddImg] = useState("");
  let [addStatus, setaddStatus] = useState(true);

  async function addUser() {
    let newUser = {
      name: addName,
      sena: addSena,
      img: addImg,
      status: addStatus == "active",
    };
    try {
      await fetch(api, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      get();
      setaddModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [editSena, seteditSena] = useState("");
  let [editImg, seteditImg] = useState("");
  let [editStatus, seteditStatus] = useState(true);
  let [idx, setidx] = useState(null);

  function openeditModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditSena(e.sena);
    seteditImg(e.img);
    seteditStatus(e.status ? "active" : "inactive");
    setidx(e.id);
  }

  async function editUser() {
    let newUser = {
      name: editName,
      sena: editSena,
      img: editImg,
      status: editStatus == "active",
    };
    try {
      await fetch(`${api}/${idx}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      get();
      seteditModal(false);
    } catch (error) {
      console.error(error);
    }
  }
  let [search, setsearch] = useState("");
  let [status, setstatus] = useState("");

  return (
    <div className="ml-[5%] ">
      <div className="flex justify-center gap-2 lg:gap-20 mr-[5%]">
        <select
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
        >
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <Input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search..."
        />
        <Button
          onClick={() => setaddModal(true)}
          color="default"
          variant="solid"
        >
          Add New Product
        </Button>
      </div>

      <div className="flex gap-5 whitespace-nowrap overflow-x-scroll scrollbar-hidden py-10">
        {data
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .filter((el) => el.status.toString().includes(status))
          .map((e) => (
            <div
              key={e.id}
              className="lg:w-[23%] basis-auto grow-0 shrink-0 text-[#A0A0A0] relative"
            >
              <span
                className={`absolute m-2.5 px-2.5 rounded ${
                  e.status
                    ? "text-green-500 bg-green-100"
                    : "text-red-500 bg-red-200"
                }`}
              >
                {e.status ? "Active" : "Inactive"}
              </span>
              <div className=" w-[296px] h-[414px] flex justify-center items-center">
                {e.img ? (
                  <img src={e.img} alt="" />
                ) : (
                  <p className="pt-5 text-[24px] text-red-500 font-bold">
                    No Image
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {e.name ? (
                    <p className="pt-5 text-[13px]">{e.name}</p>
                  ) : (
                    <p className="pt-5 text-[13px] text-red-500">No Name</p>
                  )}
                  {e.sena ? (
                    <p className=" py-2.5 text-[12px]">$ {e.sena}</p>
                  ) : (
                    <p className="pt-5 text-[13px] text-red-500">$</p>
                  )}
                </div>

                <button
                  onClick={() => showActions(e.id)}
                  className="cursor-pointer hover:bg-gray-100 rounded text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </button>

                {actionId == e.id && (
                  <div className="bg-gray-300 rounded p-1 flex items-center gap-2 absolute z-50 top-full -mt-20 ml-20">
                    <Button
                      onClick={() => delUser(e.id)}
                      color="red"
                      variant="solid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>

                    <Button
                      onClick={() => openeditModal(e)}
                      color="blue"
                      variant="solid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Button>

                    <Button color="yellow" variant="solid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      <Modal
        title="Add Cart"
        closable={{ "aria-label": "Custom Close Button" }}
        open={addModal}
        onOk={() => addUser()}
        onCancel={() => setaddModal(false)}
      >
        <div className="flex flex-col gap-2.5">
          <Input
            value={addName}
            onChange={(e) => setaddName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={addSena}
            onChange={(e) => setaddSena(e.target.value)}
            placeholder="Sena"
          />
          <Input
            value={addImg}
            onChange={(e) => setaddImg(e.target.value)}
            placeholder="Img Url"
          />
          <select
            value={addStatus}
            onChange={(e) => setaddStatus(e.target.value)}
            className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal>

      <Modal
        title="Edit Cart"
        closable={{ "aria-label": "Custom Close Button" }}
        open={editModal}
        onOk={() => editUser()}
        onCancel={() => seteditModal(false)}
      >
        <div className="flex flex-col gap-2.5">
          <Input
            value={editName}
            onChange={(e) => seteditName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={editSena}
            onChange={(e) => seteditSena(e.target.value)}
            placeholder="Sena"
          />
          <Input
            value={editImg}
            onChange={(e) => seteditImg(e.target.value)}
            placeholder="Img Url"
          />
          <select
            value={editStatus}
            onChange={(e) => seteditStatus(e.target.value)}
            className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal>
    </div>
  );
};

export default Crud;
