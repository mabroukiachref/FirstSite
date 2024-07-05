// api/submit-inquiry.js
export default (req, res) => {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;
        console.log('Inquiry received:', { name, email, phone, message });
        res.status(200).send('Thank you for your inquiry! We will get back to you soon.');
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
