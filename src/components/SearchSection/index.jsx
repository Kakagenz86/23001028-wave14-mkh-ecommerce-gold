import React from 'react'
import './style.css'
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';

const SearchSection = () => {
    const [kategoriItem, setKategoriItem] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState ('')
    const [isSubmit, setSubmit] = useState(false)
    
    useEffect(() => {
        handleGetList(name, category);
    }, []);
    
    const handleGetList = (dataName, dataCategory) => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataCategory}`)
            .then((res) => setUsers(res.data.cars))
            .catch((err) => console.log(err));
    };

    const handleKategori = (item) => {
        setKategoriItem(item);
    };

    const handlePrice = (item) => {
        setSelectedPrice(item);
    };

    const handleStatus = (item) => {
        setSelectedStatus(item);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleSearch = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        handleGetList(name, category);
        setSubmit(true)
    };

    const handleReset = () => {
        setName('')
        setCategory('')
        handleGetList("", "")
        handleKategori('')
        handlePrice('')
        handleStatus('')
        setSubmit(false)
    }

    const handleChangeSubmit = () => {
        if(isSubmit == false) {
            setSubmit(true)
            handleSubmit()
        } else if (isSubmit == true) {
            setSubmit(false)
            handleReset()
        }
    }

    return (
    <div className="rectangle">
        <div className="header-rectangle">
            <div className="rectangle-wrapper">
                <div className="rectangle-text-box">
                    <p className="rectangle-p1">Nama Mobil</p>
                    <input onChange={handleSearch} value={name} className="rectangle-text" type="text" placeholder="Ketik nama/tipe mobil"/>
                </div>
                <Dropdown onSelect={handleKategori}>
                            <p className='rectangle-p2'>Kategori</p>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='rectangle-div'>
                            {kategoriItem ? `${kategoriItem}` : 'Masukkan Kapasitas Mobil'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='rectangle-div2' onChange={handleCategory} value={category}>
                                <Dropdown.Item value={'small'} className='rectangle-item' eventKey="2 - 4 Orang">2 - 4 Orang</Dropdown.Item>
                                <Dropdown.Item value={'medium'} className='rectangle-item' eventKey="4 - 6 Orang">4 - 6 Orang</Dropdown.Item>
                                <Dropdown.Item value={'large'} className='rectangle-item' eventKey="6 - 8 Orang">6 - 8 Orang</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={handlePrice}>
                            <p className='rectangle-p2'>Harga</p>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='rectangle-div'>
                                {selectedPrice ? `${selectedPrice}` : 'Masukkan Harga Sewa Perhari'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='rectangle-div2'>
                                <Dropdown.Item className='rectangle-item' eventKey="Rp.200.000"><Icon.ChevronLeft className='me-1'/>Rp.200.000</Dropdown.Item>
                                <Dropdown.Item className='rectangle-item' eventKey="Rp.200.000 - Rp. 400.000"><Icon.ChevronLeft className='me-1'/>Rp.200.000 - Rp.400.000</Dropdown.Item>
                                <Dropdown.Item className='rectangle-item' eventKey="Rp. 500.000"><Icon.ChevronLeft className='me-1'/>Rp.500.000</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={handleStatus}>
                            <p className='rectangle-p2'>Status</p>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic"  className='rectangle-div fw-bold'>
                                {selectedStatus ? `${selectedStatus}` : 'Status'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='rectangle-div2'>
                                <Dropdown.Item className='rectangle-item' eventKey="Disewa">Disewa</Dropdown.Item>
                                <Dropdown.Item className='rectangle-item' eventKey="Belum Disewa">Belum Disewa</Dropdown.Item>
                            </Dropdown.Menu>
                </Dropdown>
                        <div>
                    {isSubmit ? <button className='rectangle-btn' onClick={handleChangeSubmit}>Reset</button> : <button className='rectangle-btn' onClick={handleChangeSubmit}>Cari Mobil</button>}
                </div>
            </div>
        </div>
        <div className='listcar'>
            {users.length ? (
                users.map(item => (
                    <div key={item.id}>
                        <div className="listcar-card">
                            <img className='listcar-img' src={item.image}/>
                            <p className='namecar'>{item.name}</p>
                            <p className='listcar-price'>{`Rp. ${item.price} / hari`}</p>
                            <p className='listcar-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel eos vero reiciendis ad cum odio, accusantium sunt.</p>
                            <button className='listcar-btn'>Pilih Mobil</button>
                        </div>
                    </div>
                ))
            ) : (
                <h5>Mobil Tidak Tersedia!!!</h5>
            )}
        </div>
    </div>
    );
}

export default SearchSection;