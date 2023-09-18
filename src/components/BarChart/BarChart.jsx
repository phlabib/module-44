import { BarChart as BChart, Bar, Tooltip , Legend, CartesianGrid, XAxis, YAxis } from "recharts";

const BarChart = () => {

  const subjectMarksData = [
        {
          "ID": "S001",
          "Name": "Alice",
          "Math": 75,
          "Science": 88,
          "English": 92,
          "History": 79,
          "Art": 87
        },
        {
          "ID": "S002",
          "Name": "Bob",
          "Math": 82,
          "Science": 78,
          "English": 85,
          "History": 91,
          "Art": 76
        },
        {
          "ID": "S003",
          "Name": "Charlie",
          "Math": 65,
          "Science": 72,
          "English": 68,
          "History": 73,
          "Art": 70
        },
        {
          "ID": "S004",
          "Name": "David",
          "Math": 91,
          "Science": 95,
          "English": 88,
          "History": 93,
          "Art": 90
        },
        {
          "ID": "S005",
          "Name": "Eve",
          "Math": 78,
          "Science": 84,
          "English": 79,
          "History": 82,
          "Art": 77
        },
        {
          "ID": "S006",
          "Name": "Frank",
          "Math": 89,
          "Science": 92,
          "English": 90,
          "History": 88,
          "Art": 91
        },
        {
          "ID": "S007",
          "Name": "Grace",
          "Math": 72,
          "Science": 76,
          "English": 70,
          "History": 75,
          "Art": 74
        },
        {
          "ID": "S008",
          "Name": "Hannah",
          "Math": 95,
          "Science": 98,
          "English": 93,
          "History": 96,
          "Art": 94
        },
        {
          "ID": "S009",
          "Name": "Isaac",
          "Math": 84,
          "Science": 87,
          "English": 82,
          "History": 85,
          "Art": 80
        },
        {
          "ID": "S010",
          "Name": "Jane",
          "Math": 70,
          "Science": 72,
          "English": 68,
          "History": 71,
          "Art": 69
        }
      ];

    return (
        <div>
        <BChart width={730} height={250} data={subjectMarksData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="Name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="Math" fill="#8884d8" />
<Bar dataKey="English" fill="#82ca9d" />
<Bar dataKey={"Art"}></Bar>
</BChart>
    </div>
    );
};

export default BarChart;