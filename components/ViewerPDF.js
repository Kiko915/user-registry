import {
  Page,
  Text,
  View,
  Document as PDFDoc,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 1000,
    marginHorizontal: "auto",
    marginBottom: 12,
  },
  header: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
});
// Create Document Component
const MyDocument = ({ title, description }) => {
  return (
    <PDFDoc title="User Registry">
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <Text>{title}</Text>
        </View>
        <View style={styles.section}>
          <Text>{description}</Text>
        </View>
      </Page>
    </PDFDoc>
  );
};

export default MyDocument;
