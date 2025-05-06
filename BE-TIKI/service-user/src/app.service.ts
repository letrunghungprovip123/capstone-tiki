import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Twilio } from 'twilio';
@Injectable()

export class AppService {
  constructor(private prismaService:PrismaService,
    private jwtService:JwtService
  ){}
async hanldeLogin(data) {
   const result = await this.prismaService.users.findFirst({
    where:{
      phone:data.phone,
    }
    })
    if(!result?.phone){
     
      return "Số điện thoại không tồn tại"
    }
    

   

    // const myPhone = await this.prismaService.customer.findFirst({
    //   where:{
    //     id:result.id,
    //   }
    // })
    // if(!myPhone?.password){
    
    //   return ""
    // }
    // const isMatch = await bcrypt.compare(data.password, myPhone.password);
   
    const payload = { phone: data.phone };
    return {
      
      access_token: await this.jwtService.signAsync(payload),
    };

  }
 
async hanldeRegister(data:{phone:string}) {
  console.log(data.phone)
    const otp = await this.sendSms(data.phone)
    if(!otp){
      return "Gửi OTP không thành công"
    }
  
    return {
      status: 200,
      message: 'Gửi OTP thành công',

    }
  }
  async handleOtp(data:{phone:string, code:string}) {
   
    try {
     
    
      const res = await this.prismaService.users.create({
        data: {
          phone: data.phone,
        },
      });
      
      
      const customer = await this.prismaService.customer.create({
        data: {
          id_user: res.id, 
        },
      });
     
      const payload = { phone: data.phone };
      return {
        status: 200,
        message: 'Register thành công',
        data:{ res,access_token: await this.jwtService.signAsync(payload),},
  
      }
    } catch (error) {
      console.log(error)
      
    }
  }
async sendSms(phone:string) {

const accountSid = 'AC38c41b4d37ed1b35affa23461804de8a9';
const authToken = '92957fa57072ee48676444930c056c';
const client = new Twilio(accountSid, authToken);
try {
  const verification = await client.verify.v2
    .services("VA6a679237b29710a9a0d8494dcf76504fd")
    .verifications.create({ to: `+84${phone}`, channel: 'sms' });

  return verification.status === 'pending'; // true nếu gửi thành công
} catch (error) {
 
  return false;
}

}

async verifyOtp(phone: string, code: string): Promise<boolean> {
  const accountSid = 'AC38c41b4d37ed1b35affa2346804d1e8a9';
  const authToken = '92957fa57072ee48676444930c056c';
  const client = new Twilio(accountSid, authToken);

  try {
    const verificationCheck = await client.verify.v2
      .services('VA6a679237b2970a9a0d8494dcf716504fd')
      .verificationChecks
      .create({ to: `+84${phone}`, code });

    console.log('Kết quả xác minh OTP:', verificationCheck.status);

    return verificationCheck.status === 'approved'; // true nếu OTP đúng
  } catch (error) {
    console.log(error)
    console.error('Lỗi xác minh OTP:', error.message);
    return false;
  }
}

}


