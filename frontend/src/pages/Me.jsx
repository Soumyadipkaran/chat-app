const AboutMe = () => {  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 mt-16">
      <h1 className="text-4xl font-bold mb-4">About This App</h1>
      
      <p className="text-lg text-base-content/70 max-w-lg mb-6">
        This chat application is built using the MERN stack with real-time messaging powered by Socket.io. 
        It provides secure authentication using JWT, image uploads with Cloudinary, and a customizable UI with multiple themes.  
      </p>

      <div className="bg-base-200 p-6 rounded-xl shadow-md max-w-md w-full mb-6">
        <h2 className="text-2xl font-semibold mb-3">Terms & Policy</h2>
        <p className="text-base text-base-content/70">
          We respect user privacy and ensure data security. Messages are end-to-end encrypted, 
          and no personal data is shared with third parties. By using this app, you agree to our terms of service.
        </p>
      </div>

      <div className="bg-base-200 p-6 rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-3">About the Developer</h2>
        <p className="text-lg text-base-content/70 max-w-lg mb-4">
          I'm a passionate developer with expertise in **Full Stack Web Development (MERN)**,  
          **Android Development**, and **Machine Learning**. I love problem-solving, DSA, and building applications.
        </p>

        <p className="text-xl font-semibold">Soumyadip Karan</p>
      
        <div className="mt-4">
          <p className="text-base text-base-content/70">📧 Email: <a href="soumyadipkaran65@gmail.com" className="link link-primary">soumyadipkaran65@gmail.com</a></p>
          <p className="text-base text-base-content/70">💼 LinkedIn: <a href="https://www.linkedin.com/in/soumyadip-karan-82559224b" target="_blank" rel="noopener noreferrer" className="link link-primary">linkedin.com/in/soumyadip-karan</a></p>
          <p className="text-base text-base-content/70">📂 GitHub: <a href="https://github.com/Soumyadipkaran" target="_blank" rel="noopener noreferrer" className="link link-primary">github.com/Soumyadipkaran</a></p>
          <p className="text-base text-base-content/70">⚡ LeetCode: <a href="https://leetcode.com/u/soumyadipkaran2004/" target="_blank" rel="noopener noreferrer" className="link link-primary">leetcode.com/soumyadipkaran2004</a></p>
          <p className="text-base text-base-content/70">📸 Instagram: <a href="https://www.instagram.com/Sdkaran_" target="_blank" rel="noopener noreferrer" className="link link-primary">instagram.com/soumyadip-karan</a></p>        
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
