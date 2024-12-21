import React from 'react'
import './eservice.module.css'
import Link from 'next/link'
import Head from 'next/head'


const page = () => {
  return (
<div>
  <Head>
    <title>E Services Manipur</title>
    <meta name="description" content="E Services Manipur" />
    <meta name="keywords" content="E-Services-Manipur,EService, Manipur, obc, income, domicile, certificate" />
  </Head>
    <h1>E Services Manipur</h1>
    <p>The Government of Manipur has launched e-Services Manipur, a unified platform to streamline access to various government services. This blog provides an easy-to-follow guide on what e-Services Manipur is, how to use it, and the essential features you need to know.</p>

<h3>What is e-Services Manipur?</h3>
<p>e-Services Manipur is an online portal developed by the Government of Manipur to simplify the delivery of government services to citizens. It includes services such as:</p>
<ul>
    <li>- Applying for certificates (e.g., OBC, Domicile, Permanent Resident, SC/ST certificates, Death, Birth)</li>
    <li>- Checking the status of applications.</li>
    <li>- Downloading issued certificates.</li>
    <li>- Accessing other government-related services.</li>
</ul>
<p>This portal aims to save time, reduce paperwork, and provide transparency in service delivery.</p>

<h3>How to Register on e-Services Manipur</h3>
<p>Follow these steps to register:</p>
<ol>
    <li>Visit the official website: open<Link href='https://www.eservicesmanipur.gov.in'> e-Services Manipur</Link> in your browser</li>
    <li>Click on the "Register" button**: Usually found on the top-right corner of the homepage.</li>
    <li>Fill in the registration form: Enter your details like name, email address, mobile number, Aadher number, and set a password.</li>
    <li>Verify your email/mobile number/aadher: You’ll receive an OTP. Enter it to verify your account.</li>
    <li>Complete the process: Submit the form. Your account is now ready to use.</li>
</ol>
<h3>How to Log In to e-Services Manipur</h3>
<ol>
    <li>Visit the official website: Go to <Link href='https://www.eservicesmanipur.gov.in'>e-Services Manipur</Link></li>
    <li>Click on "Login :You’ll find the login button on the homepage</li>
    <li>Enter your credentials: Input your registered email or mobile number and password</li>
    <li>Click on "Sign In": You will be redirected to your dashboard.</li>
    <li></li>
</ol>

<h3> How to Apply for Services</h3>
<ol>
    <li>Log in to your account: Access the dashboard.</li>
    <li>Choose a service: From the menu, select the service you want to apply for (e.g., Birth Certificate).</li>
    <li>Fill in the application form: Provide the required details and upload necessary documents.</li>
    <li>Submit the application: Verify the information and submit your form.</li>
    <li>Pay the fee (if applicable): but not applicable.</li>
</ol>
<h3>How to Check Application Status</h3>
<ol>
    <li>Log in to the portal</li>
    <li>Navigate to "Track Application": This option is available on the dashboard.</li>
    <li>Enter your application ID: You’ll receive this ID after submitting your form.</li>
    <li>View the status: The system will display the current status of your application.</li>
</ol>
<h3>How to Download Issued Certificates</h3>
<ol>
  <li>Log in to your account.</li>
  <li>Go to the "Downloads" section: Available on the dashboard.</li>
  <li>Select your issued certificate: Choose the document you need.</li>
  <li>Download the file: Click on the "Download" button to save the certificate.</li>
</ol>


<h3>How to e-Sign Documents</h3> 
<ol>
  <li>Log in to the portal.</li>
  <li>Upload the document: Navigate to the e-Sign section and upload your file.</li>
  <li>Verify your identity: Use your Aadhaar-linked mobile number to authenticate.</li>
  <li>Sign the document: Once verified, the system will electronically sign your document.</li>
  <li>Download the signed document: Save the e-Signed file for your records.</li>
</ol>
</div>
  )
}

export default page