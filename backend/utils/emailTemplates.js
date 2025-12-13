export const welcomeEmail = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h1 
        style="
          font-size: 32px; 
          font-weight: 800; 
          background: linear-gradient(to right, #6366f1, #a855f7, #ec4899); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          margin-bottom: 20px;
        ">
        TecHub
      </h1>
      <p style="font-size: 16px;">Hello ${name},</p>
      <p style="font-size: 16px;">Welcome to <strong>TecHub</strong>! We are excited to have you onboard.</p>
      <p style="font-size: 16px;">You can now explore our courses, internships, and other resources.</p>
      <br />
      <p style="font-size: 16px;">This is a demo email sent by Muzamil-Fatima</p>
    </div>
  `;
};
