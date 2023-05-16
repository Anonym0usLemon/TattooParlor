<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/site.Master" Inherits="System.Web.Mvc.ViewPage<Genesis.ViewModels.Page>" %>
<%--
This "Contact" page template requires the following fields:
	* Title - Plain Text
	* MetaDescription - Plain Text
	* Heading1 - Plain Text
	* Body - HTML
--%>
<asp:Content ContentPlaceHolderID="h1_Title" runat="server"><%: Model.Data.Title %></asp:Content>

<asp:Content ContentPlaceHolderID="h2_Meta" runat="server"><%: HtmlHelpers.Meta( Html, "description", Model.Data.MetaDescription ) %></asp:Content>

<asp:Content ContentPlaceHolderID="h3_Styles" runat="server"></asp:Content>

<asp:Content ContentPlaceHolderID="h4_Scripts" runat="server"></asp:Content>

<asp:Content ContentPlaceHolderID="B00_BodyAttributes" runat="server">class="P--<%: Model.Url.Substring( 1 ).Replace( "/", "--" ) %>"</asp:Content>

<asp:Content ContentPlaceHolderID="B10_Headline" runat="server">
	
</asp:Content>

<asp:Content ContentPlaceHolderID="B20_MainContent" runat="server">
	<section class="contact-page">
		
		<div class="secondary-banner">
			<img src="/Content/images/Contact/background.jpg" alt="">
			<div class="paper-gradient"></div>
		</div>

		<div class="contact-section1">

			<div class="contact-form-section">
				<picture>
					<img class="contact-section1-background" src="/Content/images/Contact/desktop-section.png" />
				</picture>

				<div class="contact-form padding-inline"> 
					<% Html.RenderPartial( "~/Views/Shared/Partials/ContactForm.ascx" ); %>
					<h1><%: Model.Data.Heading1 %></h1>
				</div>
			</div>
			
			<div class="contact-info padding-inline">			
				<%: Model.Data.Contact %>
			</div>
	</section>
	<div class="map-container">
		<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.781697748084!2d-88.21021378426045!3d43.024981900842285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805a8f54cae141b%3A0x36d7f009ed58944e!2s1430%20E%20Moreland%20Blvd%2C%20Waukesha%2C%20WI%2053186!5e0!3m2!1sen!2sus!4v1678896879064!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>			</div>
	</div>

</asp:Content>

<asp:Content ContentPlaceHolderID="B99_JavaScript_EndOfBody" runat="server">
	<%	if ( !MvcApplication.IsGenCart ) { %>
	<script type="text/javascript" src="/shared_Gen/jQuery/Validate/1.16.0/jquery.validate.min.js"></script>
	<script type="text/javascript" src="/shared_Gen/jQuery/Validate/1.16.0/additional-methods.min.js"></script>
	<script type="text/javascript" src="/Content/js/jquery.validate.additional-methods.js"></script>
	<%	} %>
	<script type="text/javascript" src="/Content/js/ContactScript-Standard.js"></script>
	<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=initForms&render=<%: Genesis.ConfigUtilities.Configuration.GetAppValue( "RecaptchaKey", "Google" ) %>" id="GoogleRecaptchaScript" async defer></script>
</asp:Content>
