import React from 'react';

const LocationMap = () => {
    return (
        <div className="location-map w-full h-[60vh] md:h-[100vh]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.21371053308!2d-0.22944508802434926!3d51.80225557176449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763b04dc00c883%3A0x15cb1e3854de3c47!2sWentworth%20Lodge%2C%20Great%20North%20Rd%2C%20Welwyn%20Garden%20City%20AL8%207SR%2C%20UK!5e0!3m2!1sen!2s!4v1718355434946!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
            ></iframe>
        </div>
    );
};

export default LocationMap;
