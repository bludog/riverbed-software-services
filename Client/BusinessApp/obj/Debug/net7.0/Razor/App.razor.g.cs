#pragma checksum "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "50fcacc56a85e7038b561699f4fae7147b64bf82"
// <auto-generated/>
#pragma warning disable 1591
namespace Riverbed.Business.App
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
    public partial class App : global::Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<global::Microsoft.AspNetCore.Components.Routing.Router>(0);
            __builder.AddAttribute(1, "AppAssembly", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Reflection.Assembly>(
#nullable restore
#line 1 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                      typeof(App).Assembly

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(2, "AdditionalAssemblies", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Collections.Generic.IEnumerable<System.Reflection.Assembly>>(
#nullable restore
#line 2 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                              new[] { typeof(BusinessSharedUI.Pages.RbJobs).Assembly }

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(3, "Found", (global::Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.RouteData>)((routeData) => (__builder2) => {
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.RouteView>(4);
                __builder2.AddAttribute(5, "RouteData", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.RouteData>(
#nullable restore
#line 4 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                               routeData

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(6, "DefaultLayout", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Type>(
#nullable restore
#line 4 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                                                          typeof(MainLayout)

#line default
#line hidden
#nullable disable
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(7, "\r\n        ");
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.Routing.FocusOnNavigate>(8);
                __builder2.AddAttribute(9, "RouteData", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::Microsoft.AspNetCore.Components.RouteData>(
#nullable restore
#line 5 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                                     routeData

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(10, "Selector", "h1");
                __builder2.CloseComponent();
            }
            ));
            __builder.AddAttribute(11, "NotFound", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.Web.PageTitle>(12);
                __builder2.AddAttribute(13, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddContent(14, "Not found");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(15, "\r\n        ");
                __builder2.OpenComponent<global::Microsoft.AspNetCore.Components.LayoutView>(16);
                __builder2.AddAttribute(17, "Layout", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<global::System.Type>(
#nullable restore
#line 9 "D:\ProjectsGit\riverbed-software-services\Client\BusinessApp\App.razor"
                             typeof(MainLayout)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(18, "ChildContent", (global::Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(19, "<p role=\"alert\">Sorry, there\'s nothing at this address.</p>");
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591