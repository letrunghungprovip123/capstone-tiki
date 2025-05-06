'use client';
import { Checkbox, InputNumber, Tooltip } from 'antd';
import Image from 'next/image';
import {
  TrashIcon,
  InformationCircleIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

import cart from '@/data/cart.json';
import { ItemCart } from '@/components/cart/ItemCart';
import { formatCurrency } from '@/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { successCart } from '@/features/cart/cartSlice';


export default function Page() {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    name: 'Nguyễn Phúc Thịnh',
    phone: '0896359374',
    label: 'Nhà',
    address: '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh',
  });



  const [data,setData] = useState([]);
  const [datames,setDatamessage] = useState({});

  const user = useAppSelector((state: any) => state.auth.user.id);
  const items = useAppSelector((state: any) => state.cart.items);
 
  const totalPrice = items.reduce((sum:any, item:any) => sum + item.price, 0);

  useEffect(() => { 
   
    if(user){
      fetch(`http://localhost:8080/get-cart/${user}`, {
        method: 'GET',
      }).then(async (res) => {
        const data = await res.json();
        setData(data.data);
      });
    }
   
   },[])
   const router = useRouter();
const handleSubmit =(data:any)=>{

  const {items,addressInfo} = data;
  if(items.length === 0){
    toast('Vui Lòng Chọn Đơn hàng', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  const payload = {
   
    products: items.map((item: any) => ({
      image_large: item.image_large,
      description: item.description,
      top_deal: item.top_deal,
      support_delivery: item.support_delivery,
      guarantee: item.guarantee,
   
      price: item.price,
      id_user: item.id_user,
   
      name: addressInfo.name,
      phone: addressInfo.phone,
      address: addressInfo.address,
    }
  
  )),

  };
  fetch(`http://localhost:8080/create-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(async (res) => {

    if (res.status === 204 || res.status === 201) {
      const data = await res.json();
      toast('Đặt hàng thành công', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
       dispatch(successCart(data.data));
        router.push('/order');
    } else {
      
      const data = await res.json();
      setDatamessage(data);
    }
  })
  .catch((err) => {
    console.error('Lỗi fetch API:', err);
  });
  

}
  return (
    <div className='w-[75%] flex-row flex'>
      <ToastContainer

/>

      <div>
        <span className='uppercase font-medium text-xl'>Giỏ hàng</span>
        <div className='h-8 rounded-md flex flex-row  bg-white items-center text-sm'>
          <div className='ml-2 w-[45%] max-w-[45%] flex items-center gap-3'>
            <Checkbox />
            <span className='text-sm'>Tất cả sản phẩm </span>
          </div>
          <span className='text-gray-500 w-[15%]'> Đơn giá</span>
          <span className='text-gray-500 w-[15%]'>Số lượng</span>
          <span className='text-gray-500 w-[15%]'>Thành tiền</span>
          <span className='text-gray-500 w-[10%] pr-5 flex justify-end'>
            <TrashIcon className='size-5' />
          </span>
        </div>
        <div className='w-full flex flex-col bg-white mt-2 pt-5 rounded-md mb-5'>
          {data.map((product: any) => (
            <ItemCart product={product} />
          ))}
        </div>
      </div>
      <div className='w-[25%] mt-7 ml-5'>

         <div className="bg-white rounded-md p-4">
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Tên</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={addressInfo.name}
              onChange={(e) => setAddressInfo({ ...addressInfo, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Số điện thoại</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={addressInfo.phone}
              onChange={(e) => setAddressInfo({ ...addressInfo, phone: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Địa chỉ</label>
            <input
              className="w-full border px-2 py-1 rounded"
              value={addressInfo.address}
              onChange={(e) => setAddressInfo({ ...addressInfo, address: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Lưu
          </button>
        </form>
      ) : (
        <>
          <div className="flex justify-between">
            <span className="text-gray-500">Giao tới</span>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 text-sm"
            >
              Thay đổi
            </button>
          </div>
          <span className="text-sm font-semibold">
            {addressInfo.name}
            <span className="text-gray-200 inline-block px-1">|</span>{' '}
            {addressInfo.phone}
          </span>
          <div>
            <span className="bg-gray-50 p-1 rounded-sm text-xs font-semibold text-green-500 mr-2">
              {addressInfo.label}
            </span>
            <span className="text-gray-500 text-sm">
              {addressInfo.address}
            </span>
          </div>
        </>
      )}
    </div>
        <div className='bg-white mt-3 p-4 rounded-md'>
          <div className='flex flex-row justify-between items-center'>
            <span className='text-xs font-medium'>Tiki Khuyến Mãi </span>
            <div className='text-gray-500 flex flex-row items-center gap-1'>
              <span className='text-sm'>Có thể chọn 2</span>
              <Tooltip
                placement='bottom'
                title={
                  'Áp dụng tối đa 1 Mã giảm giá Sản Phẩm và 1 Mã Vận Chuyển'
                }
              >
                <InformationCircleIcon className='size-4 cursor-pointer' />
              </Tooltip>
            </div>
          </div>
          <div className='relative'>
            <Image
              src='/coupon.svg'
              unoptimized
              className='mt-3 relative'
              width={286}
              height={60}
              alt='coupon'
            />
            <div className='absolute top-1/2 -translate-y-1/2 flex flex-row items-center'>
              <Image
                src='/tiki.png'
                unoptimized
                className='ml-1.5 rounded-lg'
                width={44}
                height={44}
                alt='coupon'
              />
              <div className='text-xs font-medium ml-4 '>Giảm 3%</div>
              <div className='rounded-md text-white bg-blue-500 text-xs p-1 ml-16 px-4'>
                Bỏ Chọn
              </div>
            </div>
          </div>
          <div>
            <div className='text-blue-500 mt-5 flex flex-row items-center gap-2'>
              <TicketIcon className='size-5 font-semibold' />
              <span className='text-xs'>Chọn hoặc nhập khuyến mãi khác</span>
            </div>
          </div>
        </div>
        <div className='bg-white p-4'>
          <div className='flex flex-row justify-between'>
            <span className='text-gray-700 text-sm'>Tạm tính</span>
            <span className='text-sm'>
              {formatCurrency('vi-VN', 'VND', 1000)}
              <sup>₫</sup>
            </span>
          </div>
          <div className='flex flex-row justify-between mt-2'>
            <span className='text-gray-700 text-sm'>Giảm giá</span>
            <span className='text-sm'>
              -{formatCurrency('vi-VN', 'VND', 1000)}
              <sup>₫</sup>
            </span>
          </div>
          <hr className='my-5' />
          <div className='flex flex-row justify-between mt-2'>
            <span className='text-gray-700 text-sm'>Tổng tiền</span>
            <div className='flex flex-col justify-start items-end'>
              <span className='text-red-600 text-2xl'>
                {formatCurrency('vi-VN', 'VND', totalPrice)}
                <sup>₫</sup>
              </span>
              <span className='text-xs text-gray-500'>
                (Đã bao gồm VAT nếu có)
              </span>
            </div>
          </div>
        </div>
        <button
        
          className='bg-red-500 block mt-3 rounded-md text-white text-md py-3 text-center'
          onClick={()=>{
            handleSubmit({items,addressInfo});
          }}
        >
          Mua hàng
        </button>
      </div>
    </div>
  );
}
