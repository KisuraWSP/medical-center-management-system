import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function UpcomingChanellings() {
  const token = Cookies.get('token');
  const tokenParts = token.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));
  const patientId = payload.id;

  const [channelingData, setChannelingData] = useState([]);
  const [patient, setPatient] = useState({
    country: '',
    identity: '',
    fName: '',
    lName: '',
    gender: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    gName: '',
    relation: '',
    gId: '',
    gContact: '',
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/ch')
      .then((response) => {
        const allChannelingData = response.data;
        const relevantChannelingData = allChannelingData.filter(
          (record) => record.patient === patientId
        );
        setChannelingData(relevantChannelingData);
      })
      .catch((error) => {
        console.error('Error fetching channeling data:', error);
      });
  }, [patientId]);

  useEffect(() => {
    channelingData.forEach((record) => {
      axios
        .get(`http://localhost:4000/patientData/get/${record.patient}`)
        .then((response) => {
          const patientProfile = response.data.user.profile;
          setPatient(patientProfile);
        })
        .catch((error) => {
          console.error('Error fetching patient data', error);
        });
    });
  }, [channelingData]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getD/');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleRescheduleAndDelete = async (record, record_doctor) => {
    try {
      window.location.href = `/make-chanelling?doctorId=${record_doctor}`;
      await axios.delete(`http://localhost:4000/ch/deletec/${record}`);
    } catch (error) {
      console.error('Error rescheduling and deleting:', error);
    }
  };

  const handleCancelAppointment = async (record) => {
    try {
      await axios.delete(`http://localhost:4000/ch/deletec/${record}`);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  return (
    <>
      <div>
        <Grid>
          <Typography variant="h6">
            Patient Name: {patient.fName} {patient.lName}
          </Typography>
        </Grid>
        {channelingData.map((record) => {
          const doctor = doctors.find((d) => d._id === record.doctor);
          const availableTime = doctor?.availableTime.find(
            (time) => time._id === record.booking
          );

          const randomNumber = generateRandomNumber();

          return (
            <Grid container spacing={3} key={record._id}>
              <Grid
                item
                style={{
                  backgroundColor: 'lightyellow',
                  marginTop: 20,
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                }}
              >
                <Box p={2}>
                  <Typography variant="h6">
                    Appointment Number: {randomNumber}
                  </Typography>
                  {doctor ? (
                    <>
                      <Typography variant="h6">
                        Doctor Name: {doctor.firstName} {doctor.middleName}{' '}
                        {doctor.lastName}
                      </Typography>
                      {availableTime ? (
                        <Typography variant="h6">
                          Time: {availableTime.startTime}
                        </Typography>
                      ) : (
                        <Typography variant="h6">Time not found</Typography>
                      )}
                    </>
                  ) : (
                    <Typography variant="h6">Doctor Name: Not found</Typography>
                  )}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleRescheduleAndDelete(record._id, record.doctor)
                  }
                >
                  Reschedule
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleCancelAppointment(record._id)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </div>
    </>
  );
}
