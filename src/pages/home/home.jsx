import { useState } from "react";
import "./home.scss";
const Home = () => {
  const [open, setOpen] = useState();
  console.log(open);
  const data = [
    {
      header: "accordion header",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque  nulla quidem quam similique quae quos suscipit, excepturi illum, laborum autem soluta officia at harum sit ratione blanditiis id,odit ipsum ",
      id: 0,
    },
    {
      header: "accordion header",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque  nulla quidem quam similique quae quos suscipit, excepturi illum, laborum autem soluta officia at harum sit ratione blanditiis id,odit ipsum ",
      id: 1,
    },
    {
      header: "accordion header",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque  nulla quidem quam similique quae quos suscipit, excepturi illum, laborum autem soluta officia at harum sit ratione blanditiis id,odit ipsum ",
      id: 2,
    },
  ];
  return (
    <>
      <div className="home">
        {data.map((value, key) => (
          <div key={key} className="accordion">
            <div onClick={() => setOpen(value.id)} className="accordion-header">
              {value.header}
            </div>
            <div
              className={
                value.id === open ? "accordion-body active" : "accordion-body"
              }
            >
              <h1>{value.body}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
