import React, { useState, useEffect } from 'react';
import  Slider  from '../Components/UI/Slider'; // Ensure these component paths are correct
import Input from '../Components/UI/Input';
import Button from '../Components/UI/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Components/UI/Select';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(269400);
  const [zipCode, setZipCode] = useState('713347');
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(1953);
  const [breakdown, setBreakdown] = useState({
    principalAndInterest: 1324,
    propertyTaxes: 265,
    homeownersInsurance: 132,
    hoaFees: 132,
    utilities: 100,
  });

  useEffect(() => {
    calculateMonthlyPayment();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const mortgagePayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    setBreakdown((prev) => ({
      ...prev,
      principalAndInterest: Math.round(mortgagePayment),
    }));

    const totalMonthlyPayment = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
    setMonthlyPayment(totalMonthlyPayment);
  };

  return (
    <div>
        <NavBar/>
        <div className='bg-white'>
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 py-28">
        <h1 className="text-3xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="text-gray-600 mb-6">
            Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1 md:col-span-2">
            <label htmlFor="home-price" className="block text-sm font-medium text-gray-700 mb-1">
                Home Price
            </label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                type="number"
                id="home-price"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="pl-7"
                />
            </div>
            <Slider
                value={[homePrice]}
                onValueChange={([value]) => setHomePrice(value)}
                max={1000000}
                step={1000}
                className="mt-2"
            />
            </div>
            <div className="flex items-end">
            <div className="w-full">
                <p className="text-lg font-semibold mb-1">Monthly Payment</p>
                <p className="text-3xl font-bold">${monthlyPayment}/mo</p>
            </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
            <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
            </label>
            <Input
                type="text"
                id="zip-code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-1">
                Down Payment
            </label>
            <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                type="number"
                id="down-payment"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="pl-7 flex-grow"
                />
                <span className="ml-2 text-gray-500">{Math.round((downPayment / homePrice) * 100)}%</span>
            </div>
            </div>
            <div>
            <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate
            </label>
            <div className="relative">
                <Input
                type="number"
                id="interest-rate"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="pr-7"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">%</span>
            </div>
            </div>
            <div>
            <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-1">
                Length of Loan
            </label>
            <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                <SelectTrigger>
                <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="15">15 years</SelectItem>
                <SelectItem value="20">20 years</SelectItem>
                <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>

        <Button className="w-full md:w-auto mb-6">Get Pre-approved</Button>

        <div>
            <h2 className="text-xl font-semibold mb-4">Monthly Payment Breakdown</h2>
            <p className="text-3xl font-bold mb-4">${monthlyPayment}/mo</p>
            <div className="flex mb-4">
            <div className="h-4 bg-green-600" style={{ width: `${(breakdown.principalAndInterest / monthlyPayment) * 100}%` }}></div>
            <div className="h-4 bg-purple-600" style={{ width: `${(breakdown.propertyTaxes / monthlyPayment) * 100}%` }}></div>
            <div className="h-4 bg-blue-400" style={{ width: `${(breakdown.homeownersInsurance / monthlyPayment) * 100}%` }}></div>
            <div className="h-4 bg-yellow-400" style={{ width: `${(breakdown.hoaFees / monthlyPayment) * 100}%` }}></div>
            <div className="h-4 bg-red-400" style={{ width: `${(breakdown.utilities / monthlyPayment) * 100}%` }}></div>
            </div>
            <div className="space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 mr-2"></div>
                <span>Principal & Interest</span>
                </div>
                <span>${breakdown.principalAndInterest}</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-600 mr-2"></div>
                <span>Property Taxes</span>
                </div>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                    type="number"
                    value={breakdown.propertyTaxes}
                    onChange={(e) => setBreakdown(prev => ({ ...prev, propertyTaxes: Number(e.target.value) }))}
                    className="pl-7 w-24"
                />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-400 mr-2"></div>
                <span>Homeowners Insurance</span>
                </div>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                    type="number"
                    value={breakdown.homeownersInsurance}
                    onChange={(e) => setBreakdown(prev => ({ ...prev, homeownersInsurance: Number(e.target.value) }))}
                    className="pl-7 w-24"
                />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
                <span>HOA Fees</span>
                </div>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                    type="number"
                    value={breakdown.hoaFees}
                    onChange={(e) => setBreakdown(prev => ({ ...prev, hoaFees: Number(e.target.value) }))}
                    className="pl-7 w-24"
                />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-4 h-4 bg-red-400 mr-2"></div>
                <span>Utilities</span>
                </div>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                    type="number"
                    value={breakdown.utilities}
                    onChange={(e) => setBreakdown(prev => ({ ...prev, utilities: Number(e.target.value) }))}
                    className="pl-7 w-24"
                />
                </div>
            </div>
            </div>
        </div>
            <button className='bg-gray-300 rounded-lg px-6 py-3 text-sm hover:bg-gray-400 cursor-pointer ml-80'>Copy estimate link</button>
        </div>
    </div>
    <Footer/>
    </div>
  );
}