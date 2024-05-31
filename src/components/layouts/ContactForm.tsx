
const ContactForm = () => {
  return (
    <div className="lg:w-[530px] pt-[80px] mx-auto rounded-lg">
        <form className="space-y-6">
    
          <div>
            <label className="block text-base font-bold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="FirstName"
                className="w-1/2 p-2 bg-gray-light rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="LastName"
                className="w-1/2 p-2 bg-gray-light rounded-md text-sm"
              />
            </div>
          </div>
  
          <div className="flex space-x-4">
  <div className="flex flex-col space-y-1 w-1/2">
    <label className="block text-base font-bold mb-1">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      placeholder="company@gmail.com"
      className="p-2 bg-gray-light rounded-md text-sm"
    />
  </div>
  <div className="flex flex-col space-y-1 w-1/2">
    <label className="block text-base font-bold mb-1">
      Phone <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      placeholder="+359 000 000 000"
      className="p-2 bg-gray-light rounded-md text-sm"
    />
  </div>
</div>
  
          <div>
            <label className="block text-base font-bold mb-1">
              Comment or message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Type your message here..."
              className="w-full p-2 bg-gray-light rounded-md"
              style={{ height: '190px' }}
            ></textarea>
          </div>
  
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}

export default ContactForm;