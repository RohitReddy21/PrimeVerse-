// This is a utility function to handle form submissions
// In a real implementation, this would connect to a backend API

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendFormData = async (data: FormData): Promise<void> => {
  // Simulate network request
  return new Promise((resolve, reject) => {
    // Simulate form validation
    if (!data.name || !data.email || !data.message) {
      reject(new Error('Please fill in all required fields'));
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      reject(new Error('Please enter a valid email address'));
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      // In a real implementation, you would send this data to your backend
      console.log('Form data submitted:', data);
      
      // Simulating successful submission
      resolve();
      
      // You can replace this with an actual API call:
      // return fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // }).then(response => {
      //   if (!response.ok) throw new Error('Network response was not ok');
      //   return response.json();
      // });
    }, 1500);
  });
};