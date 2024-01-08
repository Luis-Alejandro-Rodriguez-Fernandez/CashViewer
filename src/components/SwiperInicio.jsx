import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import clienteAxios from '../config/axios';
import { useState } from 'react';
import { formatearDinero } from '../helpers/currency';
import { CircularProgressbar } from 'react-circular-progressbar';
import useApp from '../hooks/useApp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgress } from 'react-cssfx-loading';

export default function SwiperInicio({ children }) {

  const { obtenerObjetivos, objetivos, loadingObjetos } = useApp();

  useEffect(() => {
    obtenerObjetivos();
  }, []);

  if (loadingObjetos) {
    return (
      <div className="overflow-hidden">
        <CircularProgress className="" color="#69a018" height="100px" width="100px" />
      </div>
    );
  }

  return (
    <Swiper
      slidesPerView={objetivos.length > 3 ? 3 : objetivos.length}
      spaceBetween={20}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      {objetivos.length > 0
        ? objetivos.map(objetivo => {
          return <SwiperSlide
            key={objetivo.id}
            className='box shadow-md border-solid border-slate-200 border-2 curved-box p-1 cursor-pointer'>
            <h3 className='font-bold text-center my-3 text-xl'>{objetivo.name}</h3>

            <table className='w-full'>
              <thead>
                <tr className='w-auto'>
                  <th className='text-gray-500 font-semibold underline text-center'>Saldo</th>
                  <th className='text-gray-500 font-semibold underline text-center'>Meta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center font-semibold text-md'>{formatearDinero(objetivo.saldo)}</td>
                  <td className='text-center font-semibold text-md'>{formatearDinero(objetivo.objetivo)}</td>
                </tr>
              </tbody>
            </table>
            <CircularProgressbar
              className="h-20 mt-1"
              value={objetivo.progreso}
              text={`${objetivo.progreso}%`}
            />
          </SwiperSlide>
        })
        : "Todavia no has creado ningún objetivo"
      }
    </Swiper>
  )

}