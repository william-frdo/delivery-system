import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapbox } from '../api';
import { OrderLocationData } from './types';

const initialPosition = {
    lat: -23.562085,
    lng: -46.655862
}

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({ onChangeLocation }: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });
    
    const mapResponseToPlaces = (item: any) => (
    {
        label: item.place_name,
        value: item.place_name,
        position: {
            lat: item.center[1],
            lng: item.center[0]
        }
    });

    const loadOptions = async (inputValue : string) => {        
        const data = await fetchLocalMapbox(inputValue);
        const results = await data.data.features;
        return results.map(mapResponseToPlaces);
    }

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitute: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
    };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione o endereço de entrega do pedido:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer
                    center={address.position}
                    zoom={14}
                    key={address.position.lat}
                    scrollWheelZoom
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;
