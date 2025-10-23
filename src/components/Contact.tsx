import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at info@dominionconsulting.rw",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Get In </span>
              <span className="text-brand-green">Touch</span>
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
                <h3 className="text-2xl font-bold mb-6 text-brand-green">Let's Start a Conversation</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to enhance your digital presence, develop a strategic marketing plan, 
                  or need comprehensive business consulting, we're here to help you succeed.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-brand-green/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">+250 787 430 989</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-brand-green/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@dominion-consultancy.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-service-card rounded-lg hover:bg-brand-green/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Kigali, Rwanda</div>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-service-card p-4 md:p-6 rounded-xl">
                <h4 className="text-sm md:text-base font-semibold text-brand-green mb-3 md:mb-4">Working Hours</h4>
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex justify-between gap-2">
                    <span>Monday - Friday</span>
                    <span className="whitespace-nowrap">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Saturday</span>
                    <span className="whitespace-nowrap">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-service-card p-6 md:p-8 rounded-xl">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-brand-green">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-background border-border focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-background border-border focus:border-brand-green"
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-brand-green"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company (Optional)
                  </label>
                  <Input 
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background border-border focus:border-brand-green"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select 
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3 bg-background border border-border rounded-md focus:border-brand-green focus:outline-none text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="Strategic Marketing">Strategic Marketing</option>
                    <option value="Creative Branding Solutions">Creative Branding Solutions</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Events Management & Audiovisual">Events Management & Audiovisual</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="General Consultation">General Consultation</option>
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
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-brand-green"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green hover:bg-brand-green-light text-brand-green-foreground font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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