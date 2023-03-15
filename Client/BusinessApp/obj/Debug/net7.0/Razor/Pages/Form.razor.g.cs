#pragma checksum "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "12f1454cff8f91297aaf13c96dd66db9b1b7ac1a"
// <auto-generated/>
#pragma warning disable 1591
namespace Riverbed.Business.App.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 2 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Riverbed.Business.App;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Riverbed.Business.App.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 15 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 16 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.Blazor.Components;

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.FontIcons;

#line default
#line hidden
#nullable disable
#nullable restore
#line 18 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\_Imports.razor"
using Telerik.SvgIcons;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
using Riverbed.Business.App.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Components.RouteAttribute("/form")]
    public partial class Form : global::Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "class", "container-fluid");
            __builder.OpenElement(2, "div");
            __builder.AddAttribute(3, "class", "row my-4");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "class", "col-12 col-lg-9 border-right");
            __builder.OpenElement(6, "div");
            __builder.AddAttribute(7, "class", "row example-wrapper");
            __builder.OpenComponent<global::Microsoft.AspNetCore.Components.Forms.EditForm>(8);
            __builder.AddAttribute(9, "Model", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Object>(
#nullable restore
#line 9 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                      person

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(10, "OnValidSubmit", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.EventCallback<global::Microsoft.AspNetCore.Components.Forms.EditContext>>(global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::Microsoft.AspNetCore.Components.Forms.EditContext>(this, 
#nullable restore
#line 9 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                              HandleValidSubmit

#line default
#line hidden
#nullable disable
            )));
            __builder.AddAttribute(11, "class", "k-form");
            __builder.AddAttribute(12, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.Forms.EditContext>)((context) => (__builder2) => {
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.Forms.DataAnnotationsValidator>(13);
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(14, "\r\n                        ");
                __builder2.OpenElement(15, "fieldset");
                __builder2.AddMarkupContent(16, "<legend>User Details</legend>\r\n\r\n                            ");
                __builder2.OpenElement(17, "div");
                __builder2.AddAttribute(18, "class", "form-group");
                __builder2.AddMarkupContent(19, "<label for=\"FNameTb\"><span>First Name <span class=\"k-required\">*</span></span></label>\r\n                                ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.TelerikTextBox>(20);
                __builder2.AddAttribute(21, "Width", "100%");
                __builder2.AddAttribute(22, "Id", "FNameTb");
                __builder2.AddAttribute(23, "Value", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 18 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                              person.FirstName

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(24, "ValueChanged", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.EventCallback<global::System.String>>(global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::System.String>(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.FirstName = __value, person.FirstName))));
                __builder2.AddAttribute(25, "ValueExpression", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Linq.Expressions.Expression<System.Func<System.String>>>(() => person.FirstName));
                __builder2.CloseComponent();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(26, "\r\n                            ");
                __builder2.OpenElement(27, "div");
                __builder2.AddAttribute(28, "class", "form-group");
                __builder2.AddMarkupContent(29, "<label for=\"LNameTb\"><span>Last Name <span class=\"k-required\">*</span></span></label>\r\n                                ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.TelerikTextBox>(30);
                __builder2.AddAttribute(31, "Width", "100%");
                __builder2.AddAttribute(32, "Id", "LNameTb");
                __builder2.AddAttribute(33, "Value", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 24 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                              person.LastName

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(34, "ValueChanged", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.EventCallback<global::System.String>>(global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::System.String>(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.LastName = __value, person.LastName))));
                __builder2.AddAttribute(35, "ValueExpression", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Linq.Expressions.Expression<System.Func<System.String>>>(() => person.LastName));
                __builder2.CloseComponent();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(36, "\r\n                            ");
                __builder2.OpenElement(37, "div");
                __builder2.AddAttribute(38, "class", "form-group");
                __builder2.AddMarkupContent(39, "<label for=\"GenderDDL\"><span>Gender <span class=\"k-field-info\">optional</span></span></label>\r\n                                ");
                global::__Blazor.Riverbed.Business.App.Pages.Form.TypeInference.CreateTelerikDropDownList_0(__builder2, 40, 41, "Select gender", 42, 
#nullable restore
#line 31 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                            genders

#line default
#line hidden
#nullable disable
                , 43, "Text", 44, "Id", 45, "100%", 46, "GenderDDL", 47, 
#nullable restore
#line 30 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                                   person.Gender

#line default
#line hidden
#nullable disable
                , 48, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.Gender = __value, person.Gender)), 49, () => person.Gender, 50, (__builder3) => {
                    __builder3.OpenComponent<global::Telerik.Blazor.Components.DropDownListPopupSettings>(51);
                    __builder3.AddAttribute(52, "Height", "auto");
                    __builder3.CloseComponent();
                }
                );
                __builder2.CloseElement();
                __builder2.AddMarkupContent(53, "\r\n                            ");
                __builder2.OpenElement(54, "div");
                __builder2.AddAttribute(55, "class", "form-group");
                __builder2.AddMarkupContent(56, "<label for=\"EmailTb\"><span>Email <span class=\"k-required\">*</span></span></label>\r\n                                ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.TelerikTextBox>(57);
                __builder2.AddAttribute(58, "Width", "100%");
                __builder2.AddAttribute(59, "Id", "EmailTb");
                __builder2.AddAttribute(60, "Value", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 42 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                              person.Email

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(61, "ValueChanged", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.EventCallback<global::System.String>>(global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::System.String>(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.Email = __value, person.Email))));
                __builder2.AddAttribute(62, "ValueExpression", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Linq.Expressions.Expression<System.Func<System.String>>>(() => person.Email));
                __builder2.CloseComponent();
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(63, "\r\n\r\n                        ");
                __builder2.OpenElement(64, "fieldset");
                __builder2.AddMarkupContent(65, "<legend>Team Preferences</legend>\r\n                            ");
                __builder2.OpenElement(66, "div");
                __builder2.AddAttribute(67, "class", "form-group");
                __builder2.AddMarkupContent(68, "<label for=\"StartDateDP\"><span>Start date <span class=\"k-required\">*</span></span></label>\r\n                                ");
                global::__Blazor.Riverbed.Business.App.Pages.Form.TypeInference.CreateTelerikDatePicker_1(__builder2, 69, 70, "100%", 71, "StartDateDP", 72, 
#nullable restore
#line 52 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                                 person.StartDate

#line default
#line hidden
#nullable disable
                , 73, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.StartDate = __value, person.StartDate)), 74, () => person.StartDate);
                __builder2.CloseElement();
                __builder2.AddMarkupContent(75, "\r\n                            ");
                __builder2.OpenElement(76, "div");
                __builder2.AddAttribute(77, "class", "form-group");
                __builder2.AddMarkupContent(78, "<label for=\"TeamDDL\"><span>Preferred Team <span class=\"k-required\">*</span></span></label>\r\n                                ");
                global::__Blazor.Riverbed.Business.App.Pages.Form.TypeInference.CreateTelerikDropDownList_2(__builder2, 79, 80, "Preferred team", 81, "TeamDDL", 82, 
#nullable restore
#line 60 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                            Teams

#line default
#line hidden
#nullable disable
                , 83, "100%", 84, 
#nullable restore
#line 58 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                                   person.PreferredTeam

#line default
#line hidden
#nullable disable
                , 85, global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create(this, global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => person.PreferredTeam = __value, person.PreferredTeam)), 86, () => person.PreferredTeam);
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(87, "\r\n\r\n                        ");
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.Forms.ValidationSummary>(88);
                __builder2.CloseComponent();
#nullable restore
#line 67 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                         if (ShowSuccessMessage)
                        {

#line default
#line hidden
#nullable disable
                __builder2.AddMarkupContent(89, "<div class=\"alert alert-info\">\r\n                                Application form submitted Successfully, we will get back to you\r\n                            </div>");
#nullable restore
#line 72 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                        }

#line default
#line hidden
#nullable disable
                __builder2.OpenElement(90, "div");
                __builder2.AddAttribute(91, "class", "text-right");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.TelerikButton>(92);
                __builder2.AddAttribute(93, "ButtonType", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Telerik.Blazor.ButtonType>(
#nullable restore
#line 75 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                        ButtonType.Button

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(94, "OnClick", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.EventCallback<global::Microsoft.AspNetCore.Components.Web.MouseEventArgs>>(global::Microsoft.AspNetCore.Components.EventCallback.Factory.Create<global::Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 75 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                                                     CancelForm

#line default
#line hidden
#nullable disable
                )));
                __builder2.AddAttribute(95, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddContent(96, "Cancel");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(97, "\r\n                            ");
                __builder2.OpenComponent<global::Telerik.Blazor.Components.TelerikButton>(98);
                __builder2.AddAttribute(99, "ButtonType", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Telerik.Blazor.ButtonType>(
#nullable restore
#line 76 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                        ButtonType.Submit

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(100, "ThemeColor", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.String>(
#nullable restore
#line 76 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
                                                                                         ThemeConstants.Button.ThemeColor.Primary

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(101, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddContent(102, "Submit");
                }
                ));
                __builder2.CloseComponent();
                __builder2.CloseElement();
            }
            ));
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(103, "\r\n        ");
            __builder.AddMarkupContent(104, @"<div class='col-12 col-lg-3 mt-3 mt-lg-0'><h3>Telerik UI for Blazor Form</h3>
            <p>Telerik UI for Blazor provides comprehensive support for building forms.</p>

            <p>
                For more information on implementing validation and labels, refer to the article
                on <a href=""https://docs.telerik.com/blazor-ui/common-features/input-validation"" target=""_blank"">
                    Input Validation support by Telerik UI for Blazor
                </a>.
            </p></div>");
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 96 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\Pages\Form.razor"
      
    Person person { get; set; }
    bool ShowSuccessMessage { get; set; }

    protected override Task OnInitializedAsync()
    {
        GetDefaultPerson();

        return base.OnInitializedAsync();
    }

    async void HandleValidSubmit()
    {
        // implement actual data storage here
        ShowSuccessMessage = true;
        await Task.Delay(2000);
        ShowSuccessMessage = false;
        GetDefaultPerson();
        StateHasChanged();
    }

    void CancelForm()
    {
        GetDefaultPerson();
    }

    void GetDefaultPerson()
    {
        // in reality you may be pulling data from a service or authentication logic
        // not only for the form model, but also for the data sources below
        person = new Person()
        {
            StartDate = DateTime.Now.AddDays(7)
        };
    }

    IEnumerable<DropDownModel> genders = new List<DropDownModel>
    {
        new DropDownModel {Text = "female", Id = 1},
        new DropDownModel {Text = "male", Id = 2},
        new DropDownModel {Text = "other", Id = 3},
        new DropDownModel {Text = "I'd rather not say", Id = 4}
    };

    List<string> Teams = new List<string>
    {
        "Blazor", "Python", "Ruby", "Java", "JavaScript", "Assembler"
    };

#line default
#line hidden
#nullable disable
    }
}
namespace __Blazor.Riverbed.Business.App.Pages.Form
{
    #line hidden
    internal static class TypeInference
    {
        public static void CreateTelerikDropDownList_0<TItem, TValue>(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder, int seq, int __seq0, global::System.String __arg0, int __seq1, global::System.Collections.Generic.IEnumerable<TItem> __arg1, int __seq2, global::System.String __arg2, int __seq3, global::System.String __arg3, int __seq4, global::System.String __arg4, int __seq5, global::System.String __arg5, int __seq6, TValue __arg6, int __seq7, global::Microsoft.AspNetCore.Components.EventCallback<TValue> __arg7, int __seq8, global::System.Linq.Expressions.Expression<global::System.Func<TValue>> __arg8, int __seq9, global::Microsoft.AspNetCore.Components.RenderFragment __arg9)
        {
        __builder.OpenComponent<global::Telerik.Blazor.Components.TelerikDropDownList<TItem, TValue>>(seq);
        __builder.AddAttribute(__seq0, "DefaultText", __arg0);
        __builder.AddAttribute(__seq1, "Data", __arg1);
        __builder.AddAttribute(__seq2, "TextField", __arg2);
        __builder.AddAttribute(__seq3, "ValueField", __arg3);
        __builder.AddAttribute(__seq4, "Width", __arg4);
        __builder.AddAttribute(__seq5, "Id", __arg5);
        __builder.AddAttribute(__seq6, "Value", __arg6);
        __builder.AddAttribute(__seq7, "ValueChanged", __arg7);
        __builder.AddAttribute(__seq8, "ValueExpression", __arg8);
        __builder.AddAttribute(__seq9, "DropDownListSettings", __arg9);
        __builder.CloseComponent();
        }
        public static void CreateTelerikDatePicker_1<T>(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder, int seq, int __seq0, global::System.String __arg0, int __seq1, global::System.String __arg1, int __seq2, T __arg2, int __seq3, global::Microsoft.AspNetCore.Components.EventCallback<T> __arg3, int __seq4, global::System.Linq.Expressions.Expression<global::System.Func<T>> __arg4)
        {
        __builder.OpenComponent<global::Telerik.Blazor.Components.TelerikDatePicker<T>>(seq);
        __builder.AddAttribute(__seq0, "Width", __arg0);
        __builder.AddAttribute(__seq1, "Id", __arg1);
        __builder.AddAttribute(__seq2, "Value", __arg2);
        __builder.AddAttribute(__seq3, "ValueChanged", __arg3);
        __builder.AddAttribute(__seq4, "ValueExpression", __arg4);
        __builder.CloseComponent();
        }
        public static void CreateTelerikDropDownList_2<TItem, TValue>(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder, int seq, int __seq0, global::System.String __arg0, int __seq1, global::System.String __arg1, int __seq2, global::System.Collections.Generic.IEnumerable<TItem> __arg2, int __seq3, global::System.String __arg3, int __seq4, TValue __arg4, int __seq5, global::Microsoft.AspNetCore.Components.EventCallback<TValue> __arg5, int __seq6, global::System.Linq.Expressions.Expression<global::System.Func<TValue>> __arg6)
        {
        __builder.OpenComponent<global::Telerik.Blazor.Components.TelerikDropDownList<TItem, TValue>>(seq);
        __builder.AddAttribute(__seq0, "DefaultText", __arg0);
        __builder.AddAttribute(__seq1, "Id", __arg1);
        __builder.AddAttribute(__seq2, "Data", __arg2);
        __builder.AddAttribute(__seq3, "Width", __arg3);
        __builder.AddAttribute(__seq4, "Value", __arg4);
        __builder.AddAttribute(__seq5, "ValueChanged", __arg5);
        __builder.AddAttribute(__seq6, "ValueExpression", __arg6);
        __builder.CloseComponent();
        }
    }
}
#pragma warning restore 1591