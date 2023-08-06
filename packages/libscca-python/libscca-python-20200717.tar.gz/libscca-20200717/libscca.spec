Name: libscca
Version: 20200717
Release: 1
Summary: Library to access the Windows Prefetch File (PF) format
Group: System Environment/Libraries
License: LGPL
Source: %{name}-%{version}.tar.gz
URL: https://github.com/libyal/libscca
BuildRoot: %{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)
               
BuildRequires: gcc               

%description -n libscca
Library to access the Windows Prefetch File (PF) format

%package -n libscca-static
Summary: Library to access the Windows Prefetch File (PF) format
Group: Development/Libraries
Requires: libscca = %{version}-%{release}

%description -n libscca-static
Static library version of libscca.

%package -n libscca-devel
Summary: Header files and libraries for developing applications for libscca
Group: Development/Libraries
Requires: libscca = %{version}-%{release}

%description -n libscca-devel
Header files and libraries for developing applications for libscca.

%package -n libscca-python2
Obsoletes: libscca-python < %{version}
Provides: libscca-python = %{version}
Summary: Python 2 bindings for libscca
Group: System Environment/Libraries
Requires: libscca = %{version}-%{release} python2
BuildRequires: python2-devel

%description -n libscca-python2
Python 2 bindings for libscca

%package -n libscca-python3
Summary: Python 3 bindings for libscca
Group: System Environment/Libraries
Requires: libscca = %{version}-%{release} python3
BuildRequires: python3-devel

%description -n libscca-python3
Python 3 bindings for libscca

%package -n libscca-tools
Summary: Several tools for reading Windows Prefetch Files (PF)
Group: Applications/System
Requires: libscca = %{version}-%{release}

%description -n libscca-tools
Several tools for reading Windows Prefetch Files (PF)

%prep
%setup -q

%build
%configure --prefix=/usr --libdir=%{_libdir} --mandir=%{_mandir} --enable-python2 --enable-python3
make %{?_smp_mflags}

%install
rm -rf %{buildroot}
%make_install

%clean
rm -rf %{buildroot}

%post -p /sbin/ldconfig

%postun -p /sbin/ldconfig

%files -n libscca
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%attr(755,root,root) %{_libdir}/*.so.*

%files -n libscca-static
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%attr(755,root,root) %{_libdir}/*.a

%files -n libscca-devel
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%{_libdir}/*.la
%{_libdir}/*.so
%{_libdir}/pkgconfig/libscca.pc
%{_includedir}/*
%{_mandir}/man3/*

%files -n libscca-python2
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%{_libdir}/python2*/site-packages/*.a
%{_libdir}/python2*/site-packages/*.la
%{_libdir}/python2*/site-packages/*.so

%files -n libscca-python3
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%{_libdir}/python3*/site-packages/*.a
%{_libdir}/python3*/site-packages/*.la
%{_libdir}/python3*/site-packages/*.so

%files -n libscca-tools
%defattr(644,root,root,755)
%license COPYING COPYING.LESSER
%doc AUTHORS README
%attr(755,root,root) %{_bindir}/*
%{_mandir}/man1/*

%changelog
* Thu Jul 23 2020 Joachim Metz <joachim.metz@gmail.com> 20200717-1
- Auto-generated

