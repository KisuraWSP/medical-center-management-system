// global imports
import { Route, Routes } from "react-router-dom";


// pages <- common for every actor type
import Home from "./views/Home.page";
import { Login, Signup } from "./views/Index.page";
import Contact from './views/ContactUs.page';

// doctor imports
import Doctor from './views/doctor-views/doctor-home.page';
import Channeling from './views/doctor-views/channeling.page';
import Symptoms from "./views/doctor-views/symptoms.page";
import Prescription from "./views/doctor-views/prescription.page";
import DoctorProfileCreate from "./views/doctor-views/doctor-profile-create.page";
import DoctorProfile from "./views/doctor-views/profile.page";

// patient imports
import Patient from './views/patient-views/patient-home.page';
import SearchDoctors from './views/patient-views/searchDoctors.page';
import CommonPatientDashboard from './views/patient-views/common-patient-dashboard.page';
//import PatientNavigationBar from './views/patient-views/patient-navigation-bar';
import SearchChanelling from './views/patient-views/search-chanelling.page';
import PatientCreateAccount from './views/patient-views/patient-create-account.page';
import PatientMakeChanelling from './views/patient-views/make-chanelling.page';
import ChanellingConfirmation from './views/patient-views/chanelling-confirmation.page';
import PatientProfile from './views/patient-views/patient-profile.page';
import PatientInquiries from './views/patient-views/inquiries.page';
import PatientAdditionalFiles from './views/patient-views/patient-additional-files.page';
import InquiryList from './views/patient-views/inq-handle.page';
import EditInquiry from "./views/patient-views/EditInquery.page";
import Reschedule from './views/patient-views/reschedule.page';
import Delete from './views/patient-views/delete.page';

// pharmacist imports
import Pharmacist from './views/pharmacist-views/parmacist-home.page';
import UpdateMedicine from './views/pharmacist-views/updateMedicine.page';
import PharmacistProfile from './views/pharmacist-views/pharmacistProfile.page';
import UpdateProfile from './views/pharmacist-views/updateProfile.page';
import MedicineStore from './views/pharmacist-views/medicineStore.page';
import MedicineOrder from './views/pharmacist-views/medicineOrders.page';
import MedicineSales from './views/pharmacist-views/medicineSales.page';
import FormPage from "./views/pharmacist-views/addMedicine.page";


// hr imports 
import HR from './views/hr-views/hr-home.page';
import Registration from './views/hr-views/hr-emp-registration.page';
import Profile from './views/hr-views/emp-profile.page';
import EditEmployee from './views/hr-views/Edit_employee.page';
import Payrollsystem from './views/hr-views/Payroll-Management.page';

// lab assistant imports
import LA from './views/lab-assistant-views/lab-assistant-home.page';
import LabFacilities from './views/lab-assistant-views/lab-facilities.page';
import LabAssistantProfile from './views/lab-assistant-views/lab-assistant-profile.page';

// Lab Assistant <- Test
import Test from './views/lab-assistant-views/viewTest.page';
import UpdateTest from "./views/lab-assistant-views/updateTest.page";

// Lab Assistant <- Inventory{Equipment}
import Equipment from './views/lab-assistant-views/viewInventory.page';
import UpdateEquipment from "./views/lab-assistant-views/updateInventory.page";

// Lab Assistant <- Report
import LabReport from './views/lab-assistant-views/viewReport.page';
import UpdateReport from "./views/lab-assistant-views/updateReport.page";

// Lab Assistant <- Sample
import UpdateSample from "./views/lab-assistant-views/sample/updateSample.page";
import ViewSample from "./views/lab-assistant-views/sample/viewSample.page";

// supplier manager imports
import SM from "./views/supplier-manager-views/supplier-manager-home.page";
//import SearchDoctors from './views/patient-views/searchDoctors';
import SupplierRegistration from './views/supplier-manager-views/supplier-registration.page';
import SupplierProfile from './views/supplier-manager-views/supplier-profile.page';
import SupplierList from './views/supplier-manager-views/supplier-list.page';
import SupplierPayment from './views/supplier-manager-views/supplier-payment.page';
import SupplierInventoryEquipment from './views/supplier-manager-views/supplier-inventory-equipment.page';
import SupplierInventoryMedicine from './views/supplier-manager-views/supplier-inventory-medicine.page';
import SupplierOrderRequest from './views/supplier-manager-views/supplier-order-request.page';
import SupplierOrderConfirmation from './views/supplier-manager-views/supplier-order-confirmation.page';
import SupplierOrderPharmacy from './views/supplier-manager-views/supplier-order-pharmacy.page';


// resource person imports
import RP from "./views/resource-manager-views/resource-manager-home.page";
import RoomType from './views/resource-manager-views/roomType.page';
import Room from './views/resource-manager-views/room.page';
import EditRoom from './views/resource-manager-views/editRoom.page';


// financial manager imports
import FM from './views/financial-manager-views/financial-manager-home.page';
import Invoice from './views/financial-manager-views/invoice.page';



function App() {
  return (
    <div className="App">
      <Routes>

        {/* common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/channeling" element={<Channeling />} />
        <Route path="/symptoms/:channelingId" element={<Symptoms />} />
        <Route path="/prescription/:channelingId" element={<Prescription />} />
        <Route path="/doctor-create-profile" element={<DoctorProfileCreate />} />
        <Route path="/your-profile" element={<DoctorProfile/>}/>

        {/* Hr Routes */}
        <Route path="/hr" element={<HR />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/payroll" element={<Payrollsystem />} />

        {/*Pharmacist Routes */}
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/pharmacistProfile" element={<PharmacistProfile />} />
        <Route path="/addMedicine" element={<FormPage />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/updateMedicine" element={<UpdateMedicine/>}/>
        <Route path="/medicineStore" element={<MedicineStore />} />
        <Route path="/medicineOrder" element={<MedicineOrder />} />
        <Route path="/medicineSales" element={<MedicineSales />} />

        <Route path="/pharmacistProfile" element={<PharmacistProfile/>} />
        <Route path="/updateProfile" element={<updateProfile />} />
        <Route path="/addMedicine" element={<addMedicine/>} />
        <Route path="/updateMedicine" element={<updateMedicine />} />
        <Route path="/medicineStore" element={<MedicineStore/>} />
        <Route path="/medicineOrder" element={<MedicineOrder/>} />
        <Route path="/medicineSales" element={<MedicineSales/>} />
        <Route path="/pharmacist/*" element={<Pharmacist />} />  

        {/* Patient Routes */}
        <Route path="/searchDoctors" element={<SearchDoctors />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/search-doctors" element={<SearchDoctors />} />
        <Route path="/dash" exact Component={CommonPatientDashboard} />
        <Route path="/search-chanelling" exact Component={SearchChanelling} />
        <Route path="/patient-create-account" exact Component={PatientCreateAccount} />
        <Route path="/make-chanelling" exact Component={PatientMakeChanelling} />
        <Route path="/confirm-chanelling" exact Component={ChanellingConfirmation} />
        <Route path="/patient-profile" exact Component={PatientProfile} />
        <Route path="/patient-inquiries" exact Component={PatientInquiries} />
        <Route path="/inq-handle" exact Component={InquiryList} />
        <Route path="/patient-additional" exact Component={PatientAdditionalFiles} />
        <Route path="/rescedule-appointment" exact Component={Reschedule} />
        <Route path="/delete-appointment" exact Component={Delete} />
        <Route path="/editinq/:id" element={<EditInquiry/>} />
  

        {/* Resource person Routes */}
        <Route path="/resource-person" element={<RP />} />
        <Route path="/room-types" element={<RoomType />} />
        <Route path="/room" element={<Room/>}/>
        <Route path="/editRoom" element={<EditRoom/>}/>


        {/* Supplier Routes */}
        <Route path="/supplier" element={<SM />} />
        <Route path="/supplier/supplier-registration" element={<SupplierRegistration />} />
        <Route path="/supplier/supplier-profile" element={<SupplierProfile />} />
        <Route path="/supplier/supplier-list" element={<SupplierList />} />
        <Route path="/supplier/supplier-payment" element={<SupplierPayment />} />
        <Route path="/supplier/supplier-inventory-equipment" element={<SupplierInventoryEquipment />} />
        <Route path="/supplier/supplier-inventory-medicine" element={<SupplierInventoryMedicine />} />
        <Route path="/supplier/supplier-order-request" element={<SupplierOrderRequest />} />
        <Route path="/supplier/supplier-order-confirmation" element={<SupplierOrderConfirmation />} />
        <Route path="/supplier/supplier-order-pharmacy" element={<SupplierOrderPharmacy />} />


        {/*Lab Assistant Routes */}
        <Route path="/lab-assistant" element={<LA />} />
        <Route path="/lab-facilities" element={<LabFacilities />} />
        <Route path="/labAssistant-profile" element={<LabAssistantProfile />} />
        
        <Route path="/lab-test" element={<Test />} />
        <Route path="/lab-test/update/:id" element={<UpdateTest />} />
        <Route path="/lab-inventory" element={<Equipment />} />
        <Route path="/lab-inventory/update/:id" element={<UpdateEquipment />} />        
        <Route path="/lab-report" element={<LabReport />} />
        <Route path="/lab-report/update/:id" element={<UpdateReport />} />
        <Route path="/lab-sample" element={<ViewSample/>}/>
        <Route path="/lab-sample/update/:id" element={<UpdateSample/>}/>
        

        
        {/*Financial Manager Routes */}
        <Route path="/financial-manager" element={<FM />} />
        <Route path="/invoice" element={<Invoice />} />
       

      </Routes>

    </div>
  );
}

export default App;




