'use client'

const ErrorPage = () => {
    return (
        <>
            <style jsx>{`
            .container {
                max-width: 600px;
                width: 100%;
                text-align: center;
                padding: 40px 30px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            }
            .error-code {
                font-size: 120px;
                font-weight: 800;
                line-height: 1;
                margin-bottom: 10px;
                color: #4f46e5;
                position: relative;
                display: inline-block;
            }
            
            .error-code::after {
                content: '';
                position: absolute;
                bottom: 15px;
                left: 15%;
                width: 70%;
                height: 8px;
                background: linear-gradient(to right, #4f46e5, #7c3aed);
                border-radius: 8px;
                opacity: 0.3;
            }
            
            .error-title {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 15px;
                color: #1e293b;
            }
            
            .error-message {
                font-size: 18px;
                margin-bottom: 30px;
                line-height: 1.5;
                color: #64748b;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .cta-button {
                display: inline-block;
                padding: 14px 28px;
                background: #4f46e5;
                color: white;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
                box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
                margin-top: 20px;
            }
            
            .cta-button:hover {
                background: #4338ca;
                transform: translateY(-2px);
                box-shadow: 0 6px 12px rgba(79, 70, 229, 0.25);
            }
            
            .graphic {
                margin: 30px 0;
                position: relative;
                height: 150px;
            }
            
            .mountain {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 120px;
                height: 80px;
                background: #4f46e5;
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                opacity: 0.7;
            }
            
            .cloud {
                position: absolute;
                background: white;
                border-radius: 50%;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .cloud1 {
                width: 60px;
                height: 20px;
                top: 30px;
                left: 30%;
                animation: float 12s infinite ease-in-out;
            }
            
            .cloud2 {
                width: 40px;
                height: 15px;
                top: 50px;
                right: 30%;
                animation: float 10s infinite ease-in-out 1s;
            }
            
            .person {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 32px;
                animation: bounce 3s infinite ease-in-out;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-8px) translateX(8px); }
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateX(-50%) translateY(0); }
                50% { transform: translateX(-50%) translateY(-10px); }
            }
            
            .search-box {
                display: flex;
                max-width: 400px;
                margin: 30px auto;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            }
            
            .search-input {
                flex: 1;
                padding: 12px 16px;
                border: none;
                font-size: 16px;
                outline: none;
            }
            
            .search-button {
                padding: 12px 16px;
                background: #f1f5f9;
                border: none;
                cursor: pointer;
                color: #64748b;
                transition: all 0.2s ease;
            }
            
            .search-button:hover {
                background: #e2e8f0;
                color: #4f46e5;
            }
            
            .footer {
                margin-top: 40px;
                font-size: 14px;
                color: #94a3b8;
            }
            
            @media (max-width: 640px) {
                .error-code {
                    font-size: 100px;
                }
                
                .error-title {
                    font-size: 24px;
                }
                
                .error-message {
                    font-size: 16px;
                }
            }
        `}</style>
            <div className="container">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>

                <p className="error-message">
                    Oops! The page you're looking for seems to have wandered off into the digital wilderness.
                </p>

                <div className="graphic">
                    <div className="cloud cloud1"></div>
                    <div className="cloud cloud2"></div>
                    <div className="mountain"></div>
                    <div className="person">🧭</div>
                </div>

                <div className="footer">
                    <p>Need help? <a href="#" style={{ "color": '#4f46e5' }}>Contact support</a></p>
                </div>
            </div>
        </>
    )
}

export default ErrorPage