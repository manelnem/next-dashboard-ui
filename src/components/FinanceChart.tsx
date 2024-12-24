"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'january',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'february',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'march',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'april',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'may',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'june',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'jully',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'auguest',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'september',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'october',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'november',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'december',
    income: 2390,
    expense: 3800,
    },
];
const FinanceChart = () => {
  return (
     <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis
           dataKey="name" 
          axisLine={false} 
          tick={{fill:"#d1d5db"}}
           tickLine={false}
           tickMargin={20}
           />

          <YAxis 
          axisLine={false} 
          tick={{fill:"#d1d5db"}} 
          tickLine={false} 
          />
          <Tooltip />
          <Legend 
          align='center'
           verticalAlign='top'
            wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}
             />
          <Line 
          type="monotone" 
          dataKey="income" 
          stroke="#C3EBFA" 
          strokeWidth={5}
          />
        
          <Line 
          type="monotone" 
          dataKey="expense" 
          stroke="#CFCEFF" 
          strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
        </div>
  )
}

export default FinanceChart