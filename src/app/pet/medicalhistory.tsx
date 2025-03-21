import { useEffect, useState } from "react";
import { Table } from "antd";
import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  veterinarian: string;
}

const MedicalHistory = () => {
  const { petId } = useParams();
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {

    fetch(`/api/pets/${petId}/medical-history`)
      .then((res) => res.json())
      .then((data) => setMedicalRecords(data))
      .catch((error) => console.error("Error fetching medical history:", error));
  }, [petId]);

  const columns = [
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
    },
    {
      key: "diagnosis",
      title: "Diagnosis",
      dataIndex: "diagnosis",
    },
    {
      key: "treatment",
      title: "Treatment",
      dataIndex: "treatment",
    },
    {
      key: "veterinarian",
      title: "Veterinarian",
      dataIndex: "veterinarian",
    },
  ];

  return (
    <div className="!space-y-4">
      <div className="flex items-center">
        <Link to="/app/dashboard" className="!text-black">Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/pet" className="!text-black">Pets</Link>
        <ChevronRight size={16} />
        <h2>Medical History</h2>
      </div>

      <div className="bg-white !p-3">
        <h3 className="mb-4">Medical History for Pet ID: {petId}</h3>
        <Table className="!my-5" columns={columns} dataSource={medicalRecords} rowKey="id" />
      </div>
    </div>
  );
};

export default MedicalHistory;
