import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Inputbox from './components/InputBox';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('inr');
    const [to, setTo] = useState('usd');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <>
            <style>
                {`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                    background-color: #f9fafb;
                }

                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-image: url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
                    background-size: cover;
                    background-position: center;
                }

                .card {
                    max-width: 400px;
                    width: 100%;
                    padding: 20px;
                    border-radius: 15px;
                    background: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                }

                .card form {
                    display: flex;
                    flex-direction: column;
                }

                .input-group {
                    margin-bottom: 20px;
                }

                .btn {
                    display: block;
                    width: 100%;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #007bff;
                    border: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .btn:hover {
                    background-color: #0056b3;
                    transform: scale(1.05);
                }

                .swap-btn {
                    position: relative;
                    margin: 15px auto;
                    background-color: #ff5722;
                }

                .swap-btn:hover {
                    background-color: #e64a19;
                }
                `}
            </style>

            <div className="container">
                <div className="card">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="input-group">
                            <Inputbox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(value) => setAmount(value)}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn swap-btn"
                            onClick={swap}
                        >
                            Swap
                        </button>

                        <div className="input-group">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                            />
                        </div>

                        <button type="submit" className="btn">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
