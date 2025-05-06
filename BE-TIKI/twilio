CHỗ send sms số điện thoại ông lên trang https://console.twilio.com/ ông đk tài khoản rùi tạo token service rùi gán vào hái cái này  tui xài miễn phí test hết tiền 
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




