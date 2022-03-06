import { Button, Input, Space } from "antd";
import { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ViewerPDF from "./ViewerPDF";
import DownloadPDF from "./DownloadPDF";
const { TextArea } = Input;

export default function Description({ setVals, title, description }) {
  //   const [values, setValues] = useState({ title: "", description: "" });
  const [isOpen, setOpen] = useState(false);

  const values = {
    title,
    description,
  };

  const handleSubmit = () => {
    console.log(title);
    setVals({ title: "", description: "" });
  };

  return (
    <>
      <Space
        className="text-fields"
        direction="vertical"
        style={{ width: "100%" }}
      >
        <Input
          placeholder="Title"
          onChange={(e) =>
            setVals((prevValues) => ({
              ...prevValues,
              title: e.target.value,
            }))
          }
          value={title}
          disabled={isOpen}
        />
        <TextArea
          rows={4}
          placeholder="Description"
          onChange={(e) =>
            setVals((prevValues) => ({
              ...prevValues,
              description: e.target.value,
            }))
          }
          value={description}
          disabled={isOpen}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button
          type="primary"
          disabled={title === "" || description === ""}
          onClick={() => setOpen((prevState) => (prevState ? false : true))}
        >
          {isOpen ? "Hide PDF" : "Show PDF"}
        </Button>
        <br />
        <br />
        {isOpen && (
          <>
            <PDFViewer width={500} height={500}>
              <ViewerPDF {...values} />
            </PDFViewer>
          </>
        )}
      </Space>
    </>
  );
}
