# Hire Orbit 
## _An Innovative AI-Powered Job Portal_

Hire Orbit is a comprehensive job portal platform that connects candidates and recruiters with advanced AI-powered resume analysis capabilities. Built with Next.js and integrated with Google Gemini AI, it provides intelligent resume optimization and job matching features.

## 🚀 Features

### Core Platform Features
- Login and SignUp for both candidates and recruiters
- Dark Mode and Light Mode
- Membership Plans with payment functionality
- Responsive design for desktop and mobile
- Vercel web analytics integration
- Social feed for tech-related posts with images and timestamps

### 🤖 AI-Powered Resume Analysis
- Upload PDF resumes with automatic text extraction
- Analyze resumes against job descriptions using Google Gemini AI
- Get ATS (Applicant Tracking System) scores
- Identify missing keywords for better job matching
- Receive personalized improvement suggestions
- Real-time analysis with loading indicators

### 👥 Candidate Features
- Create and update profiles with a resume in "Account"
- In the membership section, candidates can choose a plan to apply for multiple job posts simultaneously
- List of companies that have posted jobs in the Company section
- List of all jobs in the Jobs section with various filters
- In the Activity section, candidates can track the jobs they've applied to, and see where they've been selected or rejected
- **AI Resume Analyzer**: Upload resume and get AI-powered analysis against job descriptions

### 🏢 Recruiter Features
- Create and update profiles in "Account"
- In the membership section, recruiters can choose a plan to post jobs for multiple roles
- In the Jobs section, recruiters can see how many candidates have applied for each role
- By clicking on a role, recruiters can view the list of candidates who have applied
- Recruiters can then click "View Profile" to see the candidate's profile and resume, and make a decision to select or reject the candidate

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **PDF Processing**: react-pdftotext
- **UI Components**: Custom components with shadcn/ui
- **Database**: MongoDB (inferred from models structure)
- **Authentication**: Clerk (inferred from sign-in/sign-up structure)
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v18 or above recommended)
- npm or yarn
- Google Generative AI API Key ([Get one here](https://makersuite.google.com/app/apikey))
- MongoDB database (for user data and job postings)

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ayushpremrocks/Hire-Orbit.git
   cd Hire-Orbit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # Google AI API Key
   GOOGLE_API_KEY=your_google_api_key_here
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Clerk Authentication (if using)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Other environment variables as needed
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── account/           # User account pages
│   ├── activity/          # User activity tracking
│   ├── analyzer/          # AI resume analyzer
│   ├── companies/         # Company listings
│   ├── feed/              # Social feed
│   ├── jobs/              # Job listings
│   ├── membership/        # Subscription plans
│   ├── onboard/           # User onboarding
│   └── sign-in/sign-up/   # Authentication pages
├── components/            # Reusable React components
│   ├── analyzeResume/     # Resume analysis component
│   ├── ui/                # UI components (buttons, cards, etc.)
│   └── magicui/           # Enhanced UI components
├── database/              # Database connection and queries
├── models/                # Data models (User, Job, Application, etc.)
├── lib/                   # Utility functions
└── utils/                 # Helper functions
```

## 🎯 Key Features Breakdown

### AI Resume Analyzer
The platform's standout feature uses Google Gemini AI to:
- Extract text from uploaded PDF resumes
- Compare resume content against job descriptions
- Generate ATS compatibility scores
- Identify missing keywords that could improve job matching
- Provide actionable suggestions for resume improvement
- Personalize feedback using the candidate's name from the resume

### User Management
- **Dual User Types**: Separate flows for candidates and recruiters
- **Profile Management**: Comprehensive profile creation and editing
- **Activity Tracking**: Real-time tracking of applications and hiring decisions

### Membership System
- **Tiered Plans**: Different subscription levels for enhanced features
- **Payment Integration**: Secure payment processing for premium features

## 🔧 Configuration

### Google AI Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file as `GOOGLE_API_KEY`

### Database Setup
Configure your MongoDB connection string in the environment variables.

## 📝 Usage

1. **For Candidates:**
   - Sign up and create your profile
   - Upload your resume in the analyzer section
   - Paste job descriptions to get AI-powered analysis
   - Apply for jobs and track your applications

2. **For Recruiters:**
   - Sign up and create your company profile
   - Post job openings
   - Review candidate applications
   - Use AI insights to make better hiring decisions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Google Generative AI](https://ai.google.dev/) for AI capabilities
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [react-pdftotext](https://www.npmjs.com/package/react-pdftotext) for PDF processing
- [Vercel](https://vercel.com/) for hosting and analytics

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Made with ❤️ by [Ayushpremrocks](https://github.com/Ayushpremrocks)**
