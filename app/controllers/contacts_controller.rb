class ContactsController < ApplicationController

  def home
    @contact = Contact.new
  end

  def create_contact
    @contact = Contact.new(contact_params)

    if @contact.save
      ContactMailer.contact_email(@contact).deliver_now
      flash[:notice] = "Thank you for your message. We will get back to you soon!"
      redirect_to root_path
    else
      flash[:alert] = "There was an error sending your message. Please try again."
      render :home
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone, :message)
  end
end
