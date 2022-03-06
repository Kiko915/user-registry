import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import ViewerPDF from "./ViewerPDF";
const { Title } = Typography;

export default function DownloadPDF({ values }) {
  return (
    <>
      <Title>Download your pdf!</Title>
      <br />
      <PDFDownloadLink
        document={<ViewerPDF {...values} />}
        fileName="user-registry.pdf"
      >
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        >
          Download
        </Button>
      </PDFDownloadLink>
    </>
  );
}
