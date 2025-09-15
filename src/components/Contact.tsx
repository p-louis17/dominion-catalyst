import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Get In </span>
              <span className="text-gold">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve 
              your goals with our expert consulting services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gold">Let's Start a Conversation</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to enhance your digital presence, develop a strategic marketing plan, 
                  or need comprehensive business consulting, we're here to help you succeed.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-gold/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">+250 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-gold/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@dominionconsulting.rw</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-gold/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Kigali, Rwanda</div>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-service-card p-6 rounded-xl">
                <h4 className="font-semibold text-gold mb-4">Working Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-service-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-gold">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company (Optional)
                  </label>
                  <Input 
                    id="company"
                    placeholder="Your Company"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select 
                    id="service"
                    className="w-full p-3 bg-background border border-border rounded-md focus:border-gold focus:outline-none text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Design & Development</option>
                    <option value="branding">Creative Branding Solutions</option>
                    <option value="marketing">Strategic Marketing</option>
                    <option value="social">Social Media Management</option>
                    <option value="events">Events Management</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold-light text-gold-foreground font-semibold"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;