import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCell: {
    margin: "auto",
    flexGrow: 1,
    padding: 5,
  },
  downloadButton: {
    marginTop: 20,
    textAlign: "center",
  },
});

// Create Document Component
const ViewPdf = () => {
  const location = useLocation();
  const { data } = location?.state;

  console.log(data);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Service Title</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Payment Status</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Completion Status</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Date Booked</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Date Completed</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Client</Text>
            </View>
          </View>
          {data.map((booking) => (
            <View key={booking.id} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{booking.serviceTitle}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{booking.paymentStatus}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{booking.completed ? "Completed" : "Pending"}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{booking.dateBooked}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{booking.dateCompleted}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{booking.client}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ViewPdf;
