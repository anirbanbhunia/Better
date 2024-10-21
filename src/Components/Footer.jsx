import { RiFacebookBoxFill, RiFacebookFill, RiInstagramFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Column 1: Better */}
        <div>
          <h2 className="font-bold text-lg text-green-600">Better</h2>
          <p className="mt-4">
            Better is a family of companies serving all your homeownership needs.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="font-semibold text-green-600">Better <span className="text-gray-400 font-light">Mortgage</span></li>
            <li>We can’t wait to say “Welcome home.” Apply 100% online with expert customer support.</li>
            <li className="font-semibold text-green-600">Better <span className="text-gray-400 font-light">Real Estate</span></li>
            <li>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</li>
            <li className="font-semibold text-green-600">Better <span className="text-gray-400 font-light">Cover</span></li>
            <li>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</li>
            <li className="font-semibold text-green-600">Better <span className="text-gray-400 font-light">Inspect</span></li>
            <li>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</li>
            <li className="font-semibold text-green-600">Better <span className="text-gray-400 font-light">Settlement Services</span></li>
            <li>Get transparent rates when you shop for title insurance all in one convenient place.</li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-4 space-y-4">
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>Get home inspection</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-4">
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning Center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Column 4: Contact Us and Legal */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-4 space-y-4">
            <li>hello@better.com</li>
            <li>415-523-8837</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>

          <h3 className="font-bold text-lg mt-8">Legal</h3>
          <ul className="mt-4 space-y-4">
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
        </div>
        <div className="flex gap-5 mt-6">
            <RiFacebookFill className="bg-gray-600 text-white rounded" size={20}/>
            <RiInstagramLine size={20}/>
            <RiLinkedinFill className="bg-gray-600 text-white rounded" size={20}/>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t mt-20 pt-4 text-start text-sm text-gray-600 mr-[400px]">
      <div className="container text-gray-600">

        {/* Promotional Notes */}
        <div className="text-sm text-left leading-relaxed max-w-4xl mx-auto mb-8 mt-10">
          <p>
            <sup>1</sup> Better Mortgage's One Day Mortgage™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See{" "}
            <a
              href="#"
              className="text-green-600 hover:underline"
            >
              One Day Mortgage™ Terms and Conditions.
            </a>
          </p>
          <p className="mt-4">
            <sup>2</sup> Better Mortgage's One Day HELOC™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See{" "}
            <a
              href="#"
              className="text-green-600 hover:underline"
            >
              One Day HELOC™ Terms and Conditions.
            </a>
          </p>
          <p className="mt-4">
            <sup>3</sup> Assumes borrowers are eligible for the Automated
            Valuation Model (AVM) to calculate their home value, their loan
            amount is less than $400,000, all required documents are uploaded to
            their Better Mortgage online account within 24 hours of application,
            closing is scheduled for the earliest available date and time, and a
            notary is readily available. Funding timelines may vary and may be
            longer if an appraisal is required to calculate a borrower’s home
            value.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
          <p className="mb-4">
            © 2024 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02164055 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides home inspection services. All rights reserved.
          </p>
          <p className="mb-4">
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
            Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
            made or arranged pursuant to a California Finance Lenders Law
            License. Not available in all states. Equal Housing Lender.{" "}
            <a
              href="#"
              className="text-green-600 hover:underline"
            >
              NMLS Consumer Access.
            </a>
          </p>
          <p className="mb-4">
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC’s{" "}
            <a
              href="#"
              className="text-green-600 hover:underline"
            >
              license numbers.
            </a>
          </p>
          <p className="mb-4">
            Better Real Estate, LLC provides access to real estate brokerage via
            its nationwide network of partner brokerages and real estate agents
            (“Better Real Estate Partner Agents”). Equal Housing Opportunity.
            All rights reserved.
          </p>
          <div className="text-start">
            <a
              href="#"
              className="text-gray-600 hover:underline"
            >
              New York State Housing and Anti-Discrimination Notice
            </a>{" "}
            <br />
            <a
              href="#"
              className="text-gray-600 hover:underline"
            >
              New York Standard Operating Procedures
            </a>{" "}
            <br />
            <a
              href="#"
              className="text-gray-600 hover:underline"
            >
              Texas Real Estate Commission: Information About Brokerage Services
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;