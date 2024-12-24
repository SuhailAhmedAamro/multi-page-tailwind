

import React from "react";

const Contact = () => {
return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 px-6 py-12">
{/* Title */}
<h1 className="text-4xl font-bold text-blue-600 mb-6 animate__animated animate__fadeIn">
Contact Us
</h1>

{/* Description */}
<p className="text-xl mt-4 text-gray-700 text-center animate__animated animate__fadeIn animate__delay-1s">
Feel free to get in touch with us through email or reach out via social media.
</p>

{/* Social Media Links */}
<div className="flex space-x-8 mt-8 animate__animated animate__fadeIn animate__delay-2s">
<a
href="https://www.facebook.com"
target="_blank"
rel="noopener noreferrer"
className="text-3xl text-blue-600 hover:text-blue-800 transition-all"
>
<i className="fab fa-facebook-square"></i>
</a>
<a
href="https://www.twitter.com"
target="_blank"
rel="noopener noreferrer"
className="text-3xl text-blue-400 hover:text-blue-600 transition-all"
>
<i className="fab fa-twitter-square"></i>
</a>
<a
href="https://www.linkedin.com"
target="_blank"
rel="noopener noreferrer"
className="text-3xl text-blue-700 hover:text-blue-900 transition-all"
>
<i className="fab fa-linkedin"></i>
</a>
</div>
</div>
);
};

export default Contact;
